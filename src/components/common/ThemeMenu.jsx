import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Sun, Moon, BookOpen, ChevronDown, Check } from "lucide-react";
import "./ThemeMenu.css";

export const THEME_MENU_OPTIONS = [
  { id: "light", label: "Light", description: "Bright and high contrast", Icon: Sun },
  { id: "dark", label: "Dark", description: "Easy on the eyes at night", Icon: Moon },
  { id: "sepia", label: "Sepia", description: "Warm paper tone for reading", Icon: BookOpen },
];

/**
 * Header theme switcher: a button that opens a small menu of themes.
 * Keyboard: Enter/Space/↓ open it, ↑/↓/Home/End move, Enter/Space choose,
 * Escape or Tab close it. Clicking outside closes it too.
 */
export default function ThemeMenu({ theme, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const menuId = useId();
  const current = THEME_MENU_OPTIONS.find((o) => o.id === theme) || THEME_MENU_OPTIONS[0];
  const CurrentIcon = current.Icon;

  const focusItem = (index) => {
    const count = THEME_MENU_OPTIONS.length;
    const next = ((index % count) + count) % count;
    window.requestAnimationFrame(() => itemRefs.current[next]?.focus());
  };

  const openMenu = (focusIndex) => {
    setOpen(true);
    focusItem(focusIndex ?? THEME_MENU_OPTIONS.findIndex((o) => o.id === current.id));
  };

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) closeMenu(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open, closeMenu]);

  const choose = (id) => {
    onChange(id);
    closeMenu(true);
  };

  const onTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMenu();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(THEME_MENU_OPTIONS.length - 1);
    }
  };

  const onItemKeyDown = (event, index) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusItem(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusItem(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusItem(0);
        break;
      case "End":
        event.preventDefault();
        focusItem(THEME_MENU_OPTIONS.length - 1);
        break;
      case "Escape":
        event.preventDefault();
        closeMenu(true);
        break;
      case "Tab":
        closeMenu(false);
        break;
      default:
    }
  };

  return (
    <div className={`theme-menu${open ? " theme-menu--open" : ""}`} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="theme-menu__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Theme: ${current.label}`}
        title="Change theme"
        onClick={() => (open ? closeMenu(false) : openMenu())}
        onKeyDown={onTriggerKeyDown}
      >
        <CurrentIcon size={16} strokeWidth={2.2} aria-hidden="true" />
        <div className="theme-menu__trigger-label">{current.label}</div>
        <ChevronDown size={14} strokeWidth={2.4} aria-hidden="true" className="theme-menu__chevron" />
      </button>

      {open && (
        <div className="theme-menu__popover" id={menuId} role="menu" aria-label="Choose a theme">
          <div className="theme-menu__heading" aria-hidden="true">
            Appearance
          </div>
          {THEME_MENU_OPTIONS.map(({ id, label, description, Icon }, index) => {
            const checked = id === current.id;
            return (
              <button
                key={id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={checked}
                tabIndex={-1}
                className="theme-menu__item"
                data-theme-option={id}
                onClick={() => choose(id)}
                onKeyDown={(event) => onItemKeyDown(event, index)}
              >
                <div className={`theme-menu__swatch theme-menu__swatch--${id}`} aria-hidden="true">
                  <Icon size={15} strokeWidth={2.2} />
                </div>
                <div className="theme-menu__text">
                  <div className="theme-menu__label">{label}</div>
                  <div className="theme-menu__desc">{description}</div>
                </div>
                <div className="theme-menu__check" aria-hidden="true">
                  {checked ? <Check size={16} strokeWidth={2.6} /> : null}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
