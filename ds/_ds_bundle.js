/* @ds-bundle: {"format":4,"namespace":"WantedDesignSystem_ec589a","components":[{"name":"Button","sourcePath":"components/action/Button.jsx"},{"name":"FloatingActionButton","sourcePath":"components/action/FloatingActionButton.jsx"},{"name":"IconButton","sourcePath":"components/action/IconButton.jsx"},{"name":"TextButton","sourcePath":"components/action/TextButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ContentBadge","sourcePath":"components/display/ContentBadge.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"ListCell","sourcePath":"components/display/ListCell.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"BottomNavigation","sourcePath":"components/navigation/BottomNavigation.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/selection/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/selection/Chip.jsx"},{"name":"Radio","sourcePath":"components/selection/Radio.jsx"},{"name":"Switch","sourcePath":"components/selection/Switch.jsx"}],"sourceHashes":{"components/action/Button.jsx":"709fd8aabc9d","components/action/FloatingActionButton.jsx":"92f558aa1c46","components/action/IconButton.jsx":"eddb642d5dce","components/action/TextButton.jsx":"c907e4c29f4d","components/display/Avatar.jsx":"6ee6a766f5ea","components/display/Badge.jsx":"0eec7170845f","components/display/Card.jsx":"cefe783fdc07","components/display/ContentBadge.jsx":"acdb053bbaab","components/display/Divider.jsx":"2d7f189da768","components/display/ListCell.jsx":"a3302fda7cfd","components/feedback/Alert.jsx":"ffe1f7c757f2","components/feedback/ProgressBar.jsx":"a1a0745565b3","components/feedback/Skeleton.jsx":"3859dcc9b430","components/feedback/Spinner.jsx":"3825886a3d7e","components/feedback/Tooltip.jsx":"2475cd76200c","components/forms/Select.jsx":"12338e7d5e4a","components/forms/TextField.jsx":"3622ba0ae580","components/forms/Textarea.jsx":"59b33dddf633","components/icon/Icon.jsx":"626d1537d6b2","components/icon/icon-data.js":"90ef2c0997ef","components/navigation/BottomNavigation.jsx":"689c04ce2aa1","components/navigation/SegmentedControl.jsx":"93718de07789","components/navigation/Tabs.jsx":"a64f9f90bd9e","components/selection/Checkbox.jsx":"a58326a711ae","components/selection/Chip.jsx":"5bb44dffa983","components/selection/Radio.jsx":"669b33e55914","components/selection/Switch.jsx":"7230194d6096","ui_kits/wanted-app/screens.jsx":"f86c9a122de5"},"inlinedExternals":[],"unexposedExports":[{"name":"iconAliases","sourcePath":"components/icon/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.WantedDesignSystem_ec589a = window.WantedDesignSystem_ec589a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/action/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    height: 48,
    radius: 12,
    padX: 28,
    font: "var(--font-body1-normal)",
    tracking: "var(--tracking-body1)",
    gap: 6,
    icon: 20
  },
  medium: {
    height: 40,
    radius: 10,
    padX: 20,
    font: "var(--font-body2-normal)",
    tracking: "var(--tracking-body2)",
    gap: 5,
    icon: 18
  },
  small: {
    height: 32,
    radius: 8,
    padX: 14,
    font: "var(--font-label1-normal)",
    tracking: "var(--tracking-label1)",
    gap: 4,
    icon: 16
  }
};
function useInteractive() {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  return {
    hover,
    pressed,
    bind: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false)
    }
  };
}

/**
 * Wanted Button — Solid / Outlined / Text × Primary / Assistive.
 * Sizes Large (48) · Medium (40) · Small (32). Supports leading/trailing
 * icon nodes, iconOnly, loading and disabled.
 */
function Button({
  children,
  variant = "solid",
  color = "primary",
  size = "large",
  iconOnly = false,
  disabled = false,
  loading = false,
  leadingIcon = null,
  trailingIcon = null,
  fullWidth = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.large;
  const {
    hover,
    pressed,
    bind
  } = useInteractive();

  // Base per variant/color
  let bg = "transparent",
    fg,
    border = "none";
  if (variant === "solid") {
    if (color === "primary") {
      bg = "var(--blue-50)";
      fg = "var(--static-white)";
    } else {
      bg = "var(--fill-normal)";
      fg = "var(--label-normal)";
    } // assistive
  } else if (variant === "outlined") {
    border = color === "primary" ? "1px solid var(--primary-normal)" : "1px solid var(--line-normal-normal)";
    fg = color === "primary" ? "var(--primary-normal)" : "var(--label-normal)";
  } else {
    // text
    fg = color === "primary" ? "var(--primary-normal)" : "var(--label-normal)";
  }

  // Interaction
  let overlay = "transparent";
  if (!disabled) {
    if (variant === "solid") overlay = pressed ? "rgba(0,0,0,0.14)" : hover ? "rgba(0,0,0,0.07)" : "transparent";else overlay = pressed ? "var(--fill-strong)" : hover ? "var(--fill-normal)" : "transparent";
  }

  // Disabled
  if (disabled) {
    if (variant === "solid") {
      bg = "var(--interaction-disable)";
      fg = "var(--label-disable)";
      border = "none";
    } else {
      fg = "var(--label-disable)";
      if (variant === "outlined") border = "1px solid var(--line-normal-normal)";
    }
  }
  const padX = iconOnly ? 0 : s.padX;
  const dim = iconOnly ? {
    width: s.height
  } : fullWidth ? {
    width: "100%"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, bind, rest, {
    style: {
      position: "relative",
      boxSizing: "border-box",
      height: s.height,
      minWidth: s.height,
      ...dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: `0 ${padX}px`,
      borderRadius: s.radius,
      border,
      background: bg,
      color: fg,
      font: s.font,
      letterSpacing: s.tracking,
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 120ms ease, border-color 120ms ease, color 120ms ease",
      outline: "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: overlay,
      pointerEvents: "none",
      transition: "background 120ms ease"
    }
  }), loading ? /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon,
    color: fg
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon && /*#__PURE__*/React.createElement(IconBox, {
    size: s.icon
  }, leadingIcon), !iconOnly && children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, children), iconOnly && children && /*#__PURE__*/React.createElement(IconBox, {
    size: s.icon
  }, children), trailingIcon && /*#__PURE__*/React.createElement(IconBox, {
    size: s.icon
  }, trailingIcon)));
}
function IconBox({
  size,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, children);
}
function Spinner({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "loading",
    style: {
      position: "relative",
      display: "inline-block",
      width: size,
      height: size,
      border: `2px solid ${color}`,
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "wds-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes wds-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button, __ds_default_components_action_Button_1adh3ab: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/Button.jsx", error: String((e && e.message) || e) }); }

// components/action/FloatingActionButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating Action Button — circular elevated primary action for mobile.
 * Default 56px. Pass an <Icon> as children.
 */
function FloatingActionButton({
  children,
  size = 56,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: "50%",
      border: "none",
      background: disabled ? "var(--interaction-disable)" : "var(--blue-50)",
      color: disabled ? "var(--label-disable)" : "var(--static-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 16px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.08)",
      filter: hover && !disabled ? "brightness(0.95)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      transition: "filter 120ms ease",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: size * 0.5,
      height: size * 0.5,
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { FloatingActionButton, __ds_default_components_action_FloatingActionButton_19xlfo5: FloatingActionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/FloatingActionButton.jsx", error: String((e && e.message) || e) }); }

// components/action/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    box: 40,
    icon: 24,
    radius: 12
  },
  medium: {
    box: 32,
    icon: 20,
    radius: 10
  },
  small: {
    box: 24,
    icon: 16,
    radius: 8
  }
};
function useInteractive() {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  return {
    hover,
    pressed,
    bind: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false)
    }
  };
}

/**
 * Icon-only button. variant: normal (bare), outlined, background (filled tile).
 * shape round | rounded. Pass an <Icon> as children.
 */
function IconButton({
  children,
  variant = "normal",
  shape = "rounded",
  size = "medium",
  color = "neutral",
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const {
    hover,
    pressed,
    bind
  } = useInteractive();
  let bg = "transparent",
    border = "none";
  let fg = color === "primary" ? "var(--primary-normal)" : "var(--label-normal)";
  if (variant === "background") bg = "var(--fill-normal)";
  if (variant === "outlined") border = "1px solid var(--line-normal-normal)";
  let overlay = "transparent";
  if (!disabled) overlay = pressed ? "var(--fill-strong)" : hover ? "var(--fill-normal)" : "transparent";
  if (disabled) fg = "var(--label-disable)";
  const radius = shape === "round" ? "50%" : s.radius;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, bind, rest, {
    style: {
      position: "relative",
      boxSizing: "border-box",
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius,
      border,
      background: bg,
      color: fg,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 120ms ease",
      outline: "none",
      padding: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: overlay,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: s.icon,
      height: s.icon,
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton, __ds_default_components_action_IconButton_dx24rw: IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/action/TextButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    font: "var(--font-body1-normal)",
    tracking: "var(--tracking-body1)",
    icon: 20,
    gap: 4
  },
  medium: {
    font: "var(--font-body2-normal)",
    tracking: "var(--tracking-body2)",
    icon: 16,
    gap: 2
  }
};

/**
 * Inline text button / link-action. color primary | assistive. Optional
 * underline and trailing icon (e.g. a chevron for "see more →").
 */
function TextButton({
  children,
  color = "primary",
  size = "medium",
  underline = false,
  trailingIcon = null,
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const [hover, setHover] = React.useState(false);
  let fg = color === "primary" ? "var(--primary-normal)" : "var(--label-alternative)";
  if (disabled) fg = "var(--label-disable)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      border: "none",
      background: "transparent",
      padding: 0,
      color: fg,
      font: s.font,
      letterSpacing: s.tracking,
      textDecoration: underline ? "underline" : "none",
      textUnderlineOffset: 2,
      opacity: hover && !disabled ? 0.72 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "opacity 120ms ease",
      outline: "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon,
      alignItems: "center",
      justifyContent: "center"
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { TextButton, __ds_default_components_action_TextButton_rojzwo: TextButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/action/TextButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "var(--fill-normal)",
    fg: "var(--label-normal)"
  },
  primary: {
    bg: "rgba(0,102,255,0.10)",
    fg: "var(--primary-normal)"
  },
  positive: {
    bg: "rgba(0,191,64,0.12)",
    fg: "var(--status-positive)"
  },
  negative: {
    bg: "rgba(255,66,66,0.12)",
    fg: "var(--status-negative)"
  },
  cautionary: {
    bg: "rgba(255,150,0,0.14)",
    fg: "var(--status-cautionary)"
  }
};

/**
 * Badge — compact status/label chip, a solid-color count "push" badge, or a
 * bare status dot. Use `dot` for a marker, `count` for notifications.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  count = null,
  style,
  ...rest
}) {
  if (dot) {
    const t = TONES[tone] || TONES.neutral;
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: t.fg,
        ...style
      }
    }, rest));
  }
  if (count != null) {
    const label = typeof count === "number" && count > 99 ? "99+" : count;
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: 9,
        background: "var(--status-negative)",
        color: "var(--static-white)",
        font: "var(--font-caption2)",
        letterSpacing: "var(--tracking-caption2)",
        boxSizing: "border-box",
        ...style
      }
    }), label);
  }
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 22,
      padding: "0 8px",
      borderRadius: 6,
      background: t.bg,
      color: t.fg,
      font: "var(--font-caption1)",
      letterSpacing: "var(--tracking-caption1)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge, __ds_default_components_display_Badge_1ieegi: Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — content surface. `variant` elevated (soft shadow) | outlined (hairline)
 * | flat. Radius 16 by default; `interactive` adds a hover lift.
 */
function Card({
  children,
  variant = "elevated",
  interactive = false,
  radius = 16,
  padding = 20,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    elevated: {
      background: "var(--background-elevated-normal)",
      border: "none",
      boxShadow: "0 1px 4px rgba(23,23,25,0.06), 0 4px 16px rgba(23,23,25,0.06)"
    },
    outlined: {
      background: "var(--background-normal-normal)",
      border: "1px solid var(--line-normal-normal)",
      boxShadow: "none"
    },
    flat: {
      background: "var(--background-normal-alternative)",
      border: "none",
      boxShadow: "none"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      boxSizing: "border-box",
      borderRadius: radius,
      padding,
      ...base,
      transition: "box-shadow 160ms ease, transform 160ms ease",
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "0 6px 24px rgba(23,23,25,0.10)" : base.boxShadow,
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card, __ds_default_components_display_Card_4cna3d: Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ContentBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ACCENTS = {
  blue: {
    bg: "var(--accent-background-light-blue)",
    fg: "var(--accent-foreground-blue)"
  },
  violet: {
    bg: "var(--accent-background-violet)",
    fg: "var(--accent-foreground-violet)"
  },
  purple: {
    bg: "var(--accent-background-purple)",
    fg: "var(--accent-foreground-purple)"
  },
  cyan: {
    bg: "var(--accent-background-cyan)",
    fg: "var(--accent-foreground-cyan)"
  },
  pink: {
    bg: "var(--accent-background-pink)",
    fg: "var(--accent-foreground-pink)"
  },
  red: {
    bg: "var(--accent-background-red-orange)",
    fg: "var(--accent-foreground-red)"
  },
  lime: {
    bg: "var(--accent-background-lime)",
    fg: "var(--accent-foreground-lime)"
  }
};
const SIZES = {
  large: {
    h: 24,
    padX: 8,
    font: "var(--font-label2)"
  },
  medium: {
    h: 20,
    padX: 6,
    font: "var(--font-caption1)"
  },
  small: {
    h: 18,
    padX: 6,
    font: "var(--font-caption2)"
  }
};

/**
 * Content Badge — a small accent label placed on content (e.g. 신규 / 인기 / AI).
 * `variant` weak (tinted) | solid (filled). `color` picks the accent hue.
 */
function ContentBadge({
  children,
  color = "violet",
  variant = "weak",
  size = "medium",
  style,
  ...rest
}) {
  const a = ACCENTS[color] || ACCENTS.violet;
  const s = SIZES[size] || SIZES.medium;
  const solid = variant === "solid";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: s.h,
      padding: `0 ${s.padX}px`,
      borderRadius: 4,
      background: solid ? a.fg : a.bg,
      color: solid ? "var(--static-white)" : a.fg,
      font: s.font,
      whiteSpace: "nowrap",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { ContentBadge, __ds_default_components_display_ContentBadge_4bzpgt: ContentBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ContentBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — hairline separator. `vertical` for a column rule; `strong` for a
 * heavier section break; `inset` adds side margin.
 */
function Divider({
  vertical = false,
  strong = false,
  inset = 0,
  style,
  ...rest
}) {
  const color = strong ? "var(--line-solid-normal)" : "var(--line-normal-normal)";
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true"
    }, rest, {
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: color,
        margin: `${inset}px 0`,
        ...style
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: "none",
      height: 1,
      background: color,
      margin: `0 ${inset}px`,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider, __ds_default_components_display_Divider_1o50ypy: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Linear progress bar. `value` 0–100; indeterminate when value is null. */
function ProgressBar({
  value = null,
  height = 6,
  tone = "primary",
  style,
  ...rest
}) {
  const fill = tone === "positive" ? "var(--status-positive)" : "var(--primary-normal)";
  const indet = value == null;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: height,
      background: "var(--fill-normal)",
      overflow: "hidden",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: indet ? "40%" : `${Math.max(0, Math.min(100, value))}%`,
      borderRadius: height,
      background: fill,
      transition: indet ? "none" : "width 240ms ease",
      animation: indet ? "wds-indet 1.2s ease-in-out infinite" : "none"
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes wds-indet{0%{left:-40%}100%{left:100%}}"));
}
Object.assign(__ds_scope, { ProgressBar, __ds_default_components_feedback_ProgressBar_1i5r454: ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton — shimmering placeholder for loading content. `variant` text | rect
 * | circle. Compose several to mock a card while data loads.
 */
function Skeleton({
  variant = "rect",
  width = "100%",
  height,
  radius,
  style,
  ...rest
}) {
  const h = height != null ? height : variant === "text" ? 14 : variant === "circle" ? 40 : 80;
  const w = variant === "circle" ? h : width;
  const r = radius != null ? radius : variant === "circle" ? "50%" : variant === "text" ? 6 : 12;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "block",
      width: w,
      height: h,
      borderRadius: r,
      flexShrink: 0,
      background: "linear-gradient(90deg, var(--fill-normal) 25%, var(--fill-alternative) 37%, var(--fill-normal) 63%)",
      backgroundSize: "400% 100%",
      animation: "wds-shimmer 1.4s ease infinite",
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes wds-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}"));
}
Object.assign(__ds_scope, { Skeleton, __ds_default_components_feedback_Skeleton_wgrhzn: Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spinner — indeterminate circular loader (Wanted "Circular"). `size` px,
 * `color` any CSS color (defaults to primary). Use `tone="white"` on dark.
 */
function Spinner({
  size = 24,
  color,
  tone = "primary",
  style,
  ...rest
}) {
  const stroke = Math.max(2, Math.round(size / 10));
  const c = color || (tone === "white" ? "var(--static-white)" : "var(--primary-normal)");
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": "loading"
  }, rest, {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: `${stroke}px solid var(--fill-normal)`,
      borderTopColor: c,
      animation: "wds-spin 0.72s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes wds-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner, __ds_default_components_feedback_Spinner_10l44jx: Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover/focus label bubble. `content` is the bubble text; children is
 * the trigger. `placement` top | bottom.
 */
function Tooltip({
  content,
  children,
  placement = "top",
  style
}) {
  const [show, setShow] = React.useState(false);
  const top = placement === "top";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && content && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      [top ? "bottom" : "top"]: "calc(100% + 8px)",
      zIndex: 30,
      whiteSpace: "nowrap",
      background: "var(--inverse-background)",
      color: "var(--inverse-label)",
      font: "var(--font-label2)",
      letterSpacing: "var(--tracking-label2)",
      padding: "6px 10px",
      borderRadius: 8,
      boxShadow: "0 4px 12px rgba(23,23,25,0.18)",
      pointerEvents: "none"
    }
  }, content, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      marginLeft: -4,
      [top ? "top" : "bottom"]: "100%",
      width: 0,
      height: 0,
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      [top ? "borderTop" : "borderBottom"]: "5px solid var(--inverse-background)"
    }
  })));
}
Object.assign(__ds_scope, { Tooltip, __ds_default_components_feedback_Tooltip_1lex2m1: Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextField — single-line text input with label, helper/error text, and
 * optional leading/trailing adornments. Focus ring = primary; error = negative.
 */
function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  error = null,
  helper = null,
  leading = null,
  trailing = null,
  size = "large",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "medium" ? 44 : 52;
  let borderColor = "var(--line-normal-normal)";
  if (focus) borderColor = "var(--primary-normal)";
  if (error) borderColor = "var(--status-negative)";
  if (disabled) borderColor = "var(--line-normal-normal)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label1-normal)",
      letterSpacing: "var(--tracking-label1)",
      color: "var(--label-normal)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 16px",
      borderRadius: 12,
      boxSizing: "border-box",
      background: disabled ? "var(--fill-alternative)" : "var(--background-normal-normal)",
      border: `1px solid ${borderColor}`,
      boxShadow: focus && !error ? "0 0 0 3px rgba(0,102,255,0.12)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--label-alternative)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      color: disabled ? "var(--label-disable)" : "var(--label-normal)"
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--label-alternative)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, trailing)), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label2)",
      letterSpacing: "var(--tracking-label2)",
      color: error ? "var(--status-negative)" : "var(--label-alternative)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { TextField, __ds_default_components_forms_TextField_epy789: TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input with label, helper/error and optional char counter. */
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  error = null,
  helper = null,
  rows = 4,
  maxLength,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  let borderColor = focus ? "var(--primary-normal)" : "var(--line-normal-normal)";
  if (error) borderColor = "var(--status-negative)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label1-normal)",
      letterSpacing: "var(--tracking-label1)",
      color: "var(--label-normal)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      padding: "12px 16px",
      borderRadius: 12,
      boxSizing: "border-box",
      background: disabled ? "var(--fill-alternative)" : "var(--background-normal-normal)",
      border: `1px solid ${borderColor}`,
      boxShadow: focus && !error ? "0 0 0 3px rgba(0,102,255,0.12)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    rows: rows,
    maxLength: maxLength,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      resize: "vertical",
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      color: disabled ? "var(--label-disable)" : "var(--label-normal)",
      boxSizing: "border-box"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--font-label2)",
      letterSpacing: "var(--tracking-label2)",
      color: error ? "var(--status-negative)" : "var(--label-alternative)"
    }
  }, /*#__PURE__*/React.createElement("span", null, error || helper || ""), maxLength != null && /*#__PURE__*/React.createElement("span", null, (value || "").length, "/", maxLength)));
}
Object.assign(__ds_scope, { Textarea, __ds_default_components_forms_Textarea_fj26by: Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icon/icon-data.js
try { (() => {
// Generated by fig_materialize (moduleFormat: 'icon-data') — 198 icon(s)
// as { viewBox, body } SVG-markup entries. Render via the sibling Icon.jsx
// (<Icon name="IconColorLogoGoogleNameLogoGoogle" />), or consume the path data directly.
let __ds_default_components_icon_icon_data_dzztcy;
try {
  __ds_default_components_icon_icon_data_dzztcy = {
    "IconColorLogoGoogleNameLogoGoogle": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100) matrix(1 0 0 1 0 0.000)\"/><path d=\"M 9.504 2.025 C 9.504 1.323 9.441 0.648 9.324 0 L 0 0 L 0 3.829 L 5.328 3.829 C 5.098 5.067 4.401 6.116 3.353 6.818 L 3.353 9.302 L 6.552 9.302 C 8.424 7.578 9.504 5.04 9.504 2.025 Z\" fill=\"rgb(61,130,240)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100) matrix(1 0 0 1 9.900 8.100)\"/><path d=\"M 8.847 8.019 C 11.52 8.019 13.761 7.132 15.399 5.621 L 12.2 3.136 C 11.313 3.73 10.179 4.081 8.847 4.081 C 6.269 4.081 4.086 2.34 3.308 0 L 0 0 L 0 2.565 C 1.629 5.8 4.977 8.019 8.847 8.019 Z\" fill=\"rgb(49,167,82)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100) matrix(1 0 0 1 1.053 11.781)\"/><path d=\"M 4.36 6.327 C 4.162 5.733 4.05 5.099 4.05 4.446 C 4.05 3.794 4.162 3.159 4.36 2.565 L 4.36 0 L 1.053 0 C 0.383 1.337 0 2.849 0 4.446 C 0 6.043 0.383 7.556 1.053 8.892 L 4.36 6.327 Z\" fill=\"rgb(249,186,0)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100) matrix(1 0 0 1 0 5.454)\"/><path d=\"M 8.847 3.938 C 10.3 3.938 11.606 4.437 12.631 5.419 L 15.471 2.58 C 13.757 0.981 11.516 0 8.847 0 C 4.977 0 1.629 2.219 0 5.455 L 3.308 8.019 C 4.086 5.679 6.269 3.938 8.847 3.938 Z\" fill=\"rgb(230,66,52)\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100) matrix(1 0 0 1 1.053 0)\"/>"
    },
    "IconNavigationCareerNameNavigationCareer": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.5 1.25 C 2.5 0.56 1.94 0 1.25 0 C 0.56 0 0 0.56 0 1.25 L 0 16.752 C 0 17.442 0.56 18.002 1.25 18.002 C 1.94 18.002 2.5 17.442 2.5 16.752 L 2.5 13.042 C 4.544 11.338 6.642 12.105 8.751 12.875 C 10.909 13.663 13.078 14.456 15.215 12.613 C 16.067 11.879 16.548 10.688 16.548 9.452 L 16.548 2.408 C 16.548 1.576 15.678 1.225 15.033 1.737 C 12.734 3.558 10.593 2.744 8.501 1.949 C 6.487 1.183 4.518 0.435 2.5 2.077 L 2.5 1.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.720 3)\"/>"
    },
    "IconNavigationMenuNameNavigationMenu": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.333 0 L 0.667 0 C 0.298 0 0 0.366 0 0.817 L 0 1.633 C 0 2.084 0.298 2.45 0.667 2.45 L 15.333 2.45 C 15.701 2.45 16 2.084 16 1.633 L 16 0.817 C 16 0.366 15.701 0 15.333 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 5)\"/><path d=\"M 15.333 5.775 L 0.667 5.775 C 0.298 5.775 0 6.141 0 6.592 L 0 7.408 C 0 7.859 0.298 8.225 0.667 8.225 L 15.333 8.225 C 15.701 8.225 16 7.859 16 7.408 L 16 6.592 C 16 6.141 15.701 5.775 15.333 5.775 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 5)\"/><path d=\"M 0.667 11.55 L 15.333 11.55 C 15.701 11.55 16 11.916 16 12.367 L 16 13.183 C 16 13.634 15.701 14 15.333 14 L 0.667 14 C 0.298 14 0 13.634 0 13.183 L 0 12.367 C 0 11.916 0.298 11.55 0.667 11.55 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 5)\"/>"
    },
    "IconNavigationMyPageNameNavigationMypage": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 Z M 10 10 C 11.841 10 13.333 8.508 13.333 6.667 C 13.333 4.826 11.841 3.333 10 3.333 C 8.159 3.333 6.667 4.826 6.667 6.667 C 6.667 8.508 8.159 10 10 10 Z M 10 11.667 C 7.275 11.667 4.867 12.979 3.346 15 C 4.867 17.021 7.279 18.333 10 18.333 C 12.721 18.333 15.133 17.021 16.654 15 C 15.133 12.979 12.721 11.667 10 11.667 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2 2)\"/>"
    },
    "IconNavigationRecruitNameNavigationRecruit": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.855 0 C 5.922 0 4.355 1.567 4.355 3.5 L 4.355 3.605 L 3.15 3.605 C 1.41 3.605 0 5.015 0 6.754 L 0 15.751 C 0 17.49 1.41 18.9 3.15 18.9 L 14.85 18.9 C 16.59 18.9 18 17.49 18 15.751 L 18 6.754 C 18 5.015 16.59 3.605 14.85 3.605 L 13.555 3.605 L 13.555 3.5 C 13.555 1.567 11.988 0 10.055 0 L 7.855 0 Z M 11.555 3.605 L 11.555 3.5 C 11.555 2.672 10.884 2 10.055 2 L 7.855 2 C 7.027 2 6.355 2.672 6.355 3.5 L 6.355 3.605 L 11.555 3.605 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.000 2.550)\"/>"
    },
    "IconNavigationSocialNameNavigationSocial": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 19.113 3.49 C 19.113 5.417 17.55 6.98 15.621 6.98 C 13.693 6.98 12.13 5.417 12.13 3.49 C 12.13 1.562 13.693 0 15.621 0 C 17.55 0 19.113 1.562 19.113 3.49 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.650)\"/><path d=\"M 10.641 4.863 C 10.641 6.59 9.24 7.99 7.513 7.99 C 5.785 7.99 4.385 6.59 4.385 4.863 C 4.385 3.136 5.785 1.736 7.513 1.736 C 9.24 1.736 10.641 3.136 10.641 4.863 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.650)\"/><path d=\"M 8.546 9.618 C 8.574 9.594 8.602 9.571 8.625 9.553 C 8.267 9.515 7.895 9.487 7.508 9.487 C 2.77 9.487 0 12.433 0 15.225 C 0 16.109 0.591 16.695 1.471 16.695 L 6.284 16.695 C 6 16.23 5.842 15.671 5.842 15.053 C 5.842 13.047 6.824 11.065 8.542 9.613 L 8.546 9.618 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.650)\"/><path d=\"M 10.51 9.939 C 11.851 9.148 13.569 8.65 15.621 8.65 L 15.621 8.654 C 20.909 8.654 24 11.935 24 15.057 C 24 16.044 23.344 16.7 22.357 16.7 L 8.886 16.7 C 7.899 16.7 7.243 16.044 7.243 15.057 C 7.243 13.149 8.402 11.181 10.51 9.939 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.650)\"/>"
    },
    "IconNormalApps2NameApps": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.316 1.895 C 6.316 2.941 7.165 3.789 8.211 3.789 C 9.256 3.789 10.105 2.941 10.105 1.895 C 10.105 0.849 9.256 0 8.211 0 C 7.165 0 6.316 0.849 6.316 1.895 Z M 8.211 10.105 C 7.165 10.105 6.316 9.256 6.316 8.211 C 6.316 7.165 7.165 6.316 8.211 6.316 C 9.256 6.316 10.105 7.165 10.105 8.211 C 10.105 9.256 9.256 10.105 8.211 10.105 Z M 8.211 16.484 C 7.165 16.484 6.316 15.635 6.316 14.59 C 6.316 13.544 7.165 12.695 8.211 12.695 C 9.256 12.695 10.105 13.544 10.105 14.59 C 10.105 15.635 9.256 16.484 8.211 16.484 Z M 14.526 10.105 C 13.48 10.105 12.632 9.256 12.632 8.211 C 12.632 7.165 13.48 6.316 14.526 6.316 C 15.572 6.316 16.421 7.165 16.421 8.211 C 16.421 9.256 15.572 10.105 14.526 10.105 Z M 12.632 14.59 C 12.632 15.635 13.48 16.484 14.526 16.484 C 15.572 16.484 16.421 15.635 16.421 14.59 C 16.421 13.544 15.572 12.695 14.526 12.695 C 13.48 12.695 12.632 13.544 12.632 14.59 Z M 14.526 3.789 C 13.48 3.789 12.632 2.941 12.632 1.895 C 12.632 0.849 13.48 0 14.526 0 C 15.572 0 16.421 0.849 16.421 1.895 C 16.421 2.941 15.572 3.789 14.526 3.789 Z M 0 8.211 C 0 9.256 0.849 10.105 1.895 10.105 C 2.941 10.105 3.789 9.256 3.789 8.211 C 3.789 7.165 2.941 6.316 1.895 6.316 C 0.849 6.316 0 7.165 0 8.211 Z M 1.895 16.484 C 0.849 16.484 0 15.635 0 14.59 C 0 13.544 0.849 12.695 1.895 12.695 C 2.941 12.695 3.789 13.544 3.789 14.59 C 3.789 15.635 2.941 16.484 1.895 16.484 Z M 0 1.895 C 0 2.941 0.849 3.789 1.895 3.789 C 2.941 3.789 3.789 2.941 3.789 1.895 C 3.789 0.849 2.941 0 1.895 0 C 0.849 0 0 0.849 0 1.895 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.789 3.789)\"/>"
    },
    "IconNormalArrowDownNameArrowDownThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.264 18.536 C 7.615 18.888 8.185 18.888 8.536 18.536 L 15.536 11.536 C 15.888 11.185 15.888 10.615 15.536 10.264 C 15.185 9.912 14.615 9.912 14.264 10.264 L 8.8 15.727 L 8.8 0.9 C 8.8 0.403 8.397 0 7.9 0 C 7.403 0 7 0.403 7 0.9 L 7 15.727 L 1.536 10.264 C 1.185 9.912 0.615 9.912 0.264 10.264 C -0.088 10.615 -0.088 11.185 0.264 11.536 L 7.264 18.536 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 4.100 2.600)\"/>"
    },
    "IconNormalArrowDownNameArrowDownThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.381 19.219 C 7.888 19.727 8.712 19.727 9.219 19.219 L 16.219 12.219 C 16.727 11.712 16.727 10.888 16.219 10.381 C 15.711 9.873 14.888 9.873 14.381 10.381 L 9.6 15.162 L 9.6 1.3 C 9.6 0.582 9.018 0 8.3 0 C 7.582 0 7 0.582 7 1.3 L 7 15.162 L 2.219 10.381 C 1.712 9.873 0.888 9.873 0.381 10.381 C -0.127 10.888 -0.127 11.712 0.381 12.219 L 7.381 19.219 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.700 2.200)\"/>"
    },
    "IconNormalArrowLeftNameArrowLeftThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7 3.073 L 7 17.9 C 7 18.397 7.403 18.8 7.9 18.8 C 8.397 18.8 8.8 18.397 8.8 17.9 L 8.8 3.073 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(0 -1 1 0 2.600 19.900)\"/>"
    },
    "IconNormalArrowLeftNameArrowLeftThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.219 0.381 C 8.712 -0.127 7.888 -0.127 7.381 0.381 L 0.381 7.381 C -0.127 7.888 -0.127 8.712 0.381 9.219 C 0.888 9.727 1.712 9.727 2.219 9.219 L 7 4.438 L 7 18.3 C 7 19.018 7.582 19.6 8.3 19.6 C 9.018 19.6 9.6 19.018 9.6 18.3 L 9.6 4.438 L 14.381 9.219 C 14.888 9.727 15.712 9.727 16.219 9.219 C 16.727 8.712 16.727 7.888 16.219 7.381 L 9.219 0.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 -1 1 0 2.200 20.300)\"/>"
    },
    "IconNormalArrowRightNameArrowRightThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18.536 8.536 C 18.888 8.185 18.888 7.615 18.536 7.264 L 11.536 0.264 C 11.185 -0.088 10.615 -0.088 10.264 0.264 C 9.912 0.615 9.912 1.185 10.264 1.536 L 15.727 7 L 0.9 7 C 0.403 7 0 7.403 0 7.9 C 0 8.397 0.403 8.8 0.9 8.8 L 15.727 8.8 L 10.264 14.264 C 9.912 14.615 9.912 15.185 10.264 15.536 C 10.615 15.888 11.185 15.888 11.536 15.536 L 18.536 8.536 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.600 4.100)\"/>"
    },
    "IconNormalArrowRightNameArrowRightThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 19.219 7.381 C 19.727 7.888 19.727 8.712 19.219 9.219 L 12.219 16.219 C 11.712 16.727 10.888 16.727 10.381 16.219 C 9.873 15.712 9.873 14.888 10.381 14.381 L 15.161 9.6 L 1.3 9.6 C 0.582 9.6 0 9.018 0 8.3 C 0 7.582 0.582 7 1.3 7 L 15.161 7 L 10.381 2.219 C 9.873 1.712 9.873 0.888 10.381 0.381 C 10.888 -0.127 11.712 -0.127 12.219 0.381 L 19.219 7.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.200 3.700)\"/>"
    },
    "IconNormalArrowUp2NameArrowUpThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7 3.073 L 7 17.9 C 7 18.397 7.403 18.8 7.9 18.8 C 8.397 18.8 8.8 18.397 8.8 17.9 L 8.8 3.073 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 4.100 2.600)\"/>"
    },
    "IconNormalArrowUp2NameArrowUpThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.381 0.381 C 7.888 -0.127 8.712 -0.127 9.219 0.381 L 16.219 7.381 C 16.727 7.888 16.727 8.712 16.219 9.219 C 15.711 9.727 14.888 9.727 14.381 9.219 L 9.6 4.438 L 9.6 18.3 C 9.6 19.018 9.018 19.6 8.3 19.6 C 7.582 19.6 7 19.018 7 18.3 L 7 4.438 L 2.219 9.219 C 1.712 9.727 0.888 9.727 0.381 9.219 C -0.127 8.712 -0.127 7.888 0.381 7.381 L 7.381 0.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.700 2.200)\"/>"
    },
    "IconNormalArrowUpRightNameArrowUpRightThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.124 0.9 C 12.124 0.403 11.721 0 11.224 0 L 1.574 0 C 1.077 0 0.674 0.403 0.674 0.9 C 0.674 1.397 1.077 1.8 1.574 1.8 L 9.051 1.8 L 0.264 10.587 C -0.088 10.939 -0.088 11.509 0.264 11.86 C 0.615 12.212 1.185 12.212 1.536 11.86 L 10.324 3.073 L 10.324 10.549 C 10.324 11.047 10.727 11.449 11.224 11.449 C 11.721 11.449 12.124 11.047 12.124 10.549 L 12.124 0.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 5.940 5.940)\"/>"
    },
    "IconNormalArrowUpRightNameArrowUpRightThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.083 0 C 12.801 0 13.383 0.582 13.383 1.3 L 13.383 11.199 C 13.383 11.917 12.801 12.499 12.083 12.499 C 11.365 12.499 10.783 11.917 10.783 11.199 L 10.783 4.438 L 2.219 13.003 C 1.712 13.51 0.888 13.51 0.381 13.003 C -0.127 12.495 -0.127 11.672 0.381 11.164 L 8.945 2.6 L 2.184 2.6 C 1.466 2.6 0.884 2.018 0.884 1.3 C 0.884 0.582 1.466 0 2.184 0 L 12.083 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.308 5.308)\"/>"
    },
    "IconNormalBell2NameBellFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.163 0 C 6.938 0 5.108 0.788 3.851 2.274 C 2.611 3.74 2.013 5.783 2.013 8.15 L 2.013 8.9 C 2.013 11.365 1.33 12.825 0.357 13.768 C -0.025 14.138 -0.065 14.65 0.072 15.026 C 0.21 15.409 0.591 15.8 1.162 15.8 L 17.163 15.8 C 17.735 15.8 18.115 15.409 18.254 15.026 C 18.39 14.65 18.351 14.138 17.969 13.768 C 16.996 12.825 16.313 11.365 16.313 8.9 L 16.313 8.15 C 16.313 5.783 15.715 3.74 14.475 2.274 C 13.217 0.788 11.388 0 9.163 0 Z M 3.813 8.15 C 3.813 6.065 4.34 4.483 5.225 3.437 C 6.092 2.411 7.388 1.8 9.163 1.8 C 10.938 1.8 12.233 2.411 13.101 3.437 C 13.986 4.483 14.513 6.065 14.513 8.15 L 14.513 8.9 C 14.513 11.063 14.981 12.727 15.832 14 L 2.494 14 C 3.345 12.727 3.813 11.063 3.813 8.9 L 3.813 8.15 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.837 2.100)\"/><path d=\"M 7.163 18 C 6.666 18 6.263 18.403 6.263 18.9 C 6.263 19.397 6.666 19.8 7.163 19.8 L 11.163 19.8 C 11.66 19.8 12.063 19.397 12.063 18.9 C 12.063 18.403 11.66 18 11.163 18 L 7.163 18 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.837 2.100)\"/>"
    },
    "IconNormalBell2NameBellFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.851 2.274 C 5.108 0.788 6.938 0 9.163 0 C 11.388 0 13.217 0.788 14.475 2.274 C 15.715 3.74 16.313 5.783 16.313 8.15 L 16.313 8.9 C 16.313 11.365 16.996 12.825 17.969 13.768 C 18.351 14.138 18.39 14.65 18.254 15.026 C 18.115 15.409 17.735 15.8 17.163 15.8 L 1.162 15.8 C 0.591 15.8 0.21 15.409 0.072 15.026 C -0.065 14.65 -0.025 14.138 0.356 13.768 C 1.33 12.825 2.013 11.365 2.013 8.9 L 2.013 8.15 C 2.013 5.783 2.611 3.74 3.851 2.274 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.837 2.100)\"/><path d=\"M 6.263 18.9 C 6.263 18.403 6.666 18 7.163 18 L 11.163 18 C 11.66 18 12.063 18.403 12.063 18.9 C 12.063 19.397 11.66 19.8 11.163 19.8 L 7.163 19.8 C 6.666 19.8 6.263 19.397 6.263 18.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.837 2.100)\"/>"
    },
    "IconNormalBookmarkNameBookmarkFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.211 0 C 14.69 0 15.087 0.356 15.149 0.819 L 15.158 0.947 L 15.158 15.474 C 15.158 15.997 14.734 16.421 14.211 16.421 C 13.731 16.421 13.335 16.065 13.272 15.602 L 13.263 15.474 L 13.263 1.895 L 1.895 1.895 L 1.895 17.761 L 7.172 15.25 C 7.386 15.148 7.63 15.131 7.854 15.199 L 7.986 15.25 L 14.618 18.408 C 15.09 18.633 15.291 19.198 15.066 19.67 C 14.86 20.103 14.368 20.308 13.923 20.166 L 13.803 20.118 L 7.579 17.155 L 1.355 20.118 C 0.765 20.399 0.09 20.014 0.008 19.391 L 0 19.263 L 0 0.947 C 0 0.468 0.356 0.071 0.819 0.009 L 0.947 0 L 14.211 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.421 1.895)\"/>"
    },
    "IconNormalBookmarkNameBookmarkFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.263 18.316 L 6.632 15.158 L 0 18.316 L 0 0 L 13.263 0 L 13.263 18.316 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 5.368 2.842)\"/>"
    },
    "IconNormalBubbleNameBubbleFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.105 0 C 15.634 0 20.211 3.966 20.211 8.842 C 20.211 13.718 15.634 17.684 10.105 17.684 C 9.705 17.684 9.356 17.652 8.9 17.574 L 8.402 17.48 L 8.142 17.425 L 3.981 20.063 C 3.579 20.318 3.059 20.233 2.757 19.883 L 2.673 19.77 C 2.419 19.368 2.504 18.848 2.854 18.547 L 2.967 18.463 L 7.452 15.621 C 7.659 15.49 7.908 15.444 8.148 15.493 L 8.971 15.661 L 9.351 15.727 C 9.64 15.771 9.866 15.789 10.105 15.789 C 14.643 15.789 18.316 12.606 18.316 8.842 C 18.316 5.078 14.643 1.895 10.105 1.895 C 5.567 1.895 1.895 5.077 1.895 8.842 C 1.895 11.189 3.207 13.355 5.398 14.334 C 5.875 14.548 6.09 15.108 5.876 15.586 C 5.663 16.064 5.102 16.278 4.625 16.064 C 1.73 14.771 0 11.914 0 8.842 C 0 3.966 4.576 0 10.105 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-1 0 0 1 22.105 1.895)\"/>"
    },
    "IconNormalBubbleNameBubbleFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 8.842 C 0 13.717 4.576 17.684 10.105 17.684 L 10.105 17.684 C 10.506 17.684 10.854 17.651 11.31 17.573 L 11.31 17.573 L 11.808 17.48 L 12.068 17.425 L 16.23 20.063 C 16.379 20.159 16.546 20.207 16.71 20.211 L 16.71 20.211 L 16.763 20.211 C 17.022 20.203 17.276 20.089 17.454 19.883 L 17.454 19.883 L 17.536 19.771 C 17.792 19.368 17.707 18.848 17.356 18.547 L 17.356 18.547 L 17.245 18.464 C 16.977 18.294 16.551 18.024 15.965 17.654 L 15.965 17.654 C 15.706 17.477 15.534 17.352 15.454 17.281 L 15.454 17.281 C 15.331 17.175 15.202 17.093 15.121 16.809 L 15.121 16.809 C 15.08 16.599 15.133 16.408 15.227 16.312 L 15.227 16.312 C 15.321 16.218 15.436 16.132 15.586 16.064 L 15.586 16.064 C 18.481 14.771 20.211 11.914 20.211 8.842 L 20.211 8.842 C 20.211 3.965 15.635 0 10.105 0 L 10.105 0 C 4.576 0 0 3.966 0 8.842 L 0 8.842 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 1.895)\"/>"
    },
    "IconNormalBusinessBagNameBusinessBagFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.631 0 C 14.115 0 15.068 0.974 15.152 2.422 L 15.158 2.632 L 15.158 3.792 L 18.316 3.792 C 19.311 3.792 20.121 4.655 20.208 5.621 L 20.215 5.792 L 20.215 9.853 C 20.215 9.902 20.212 9.95 20.205 9.997 C 20.209 10.033 20.211 10.069 20.211 10.105 C 20.211 10.585 19.854 10.981 19.392 11.044 L 19.263 11.053 L 12.637 11.054 L 12.637 11.688 C 12.637 12.211 12.213 12.635 11.69 12.635 L 8.53 12.635 C 8.007 12.635 7.583 12.211 7.583 11.688 L 7.583 11.054 L 1.895 11.053 L 1.895 15.788 L 18.316 15.788 L 18.316 13.579 C 18.316 13.099 18.672 12.703 19.135 12.64 L 19.263 12.632 C 19.743 12.632 20.139 12.988 20.202 13.45 L 20.211 13.579 L 20.211 16.737 C 20.211 17.216 19.854 17.613 19.392 17.676 L 19.263 17.684 L 0.947 17.684 C 0.468 17.684 0.071 17.328 0.009 16.865 L 0 16.737 L 0 5.792 C 0 4.817 0.749 3.9 1.721 3.801 L 1.895 3.792 L 5.053 3.792 L 5.053 2.632 C 5.053 1.139 5.936 0.098 7.368 0.007 L 7.576 0 L 12.631 0 Z M 1.895 9.158 L 7.583 9.16 L 7.583 8.526 C 7.583 8.003 8.007 7.579 8.53 7.579 L 11.69 7.579 C 12.213 7.579 12.637 8.003 12.637 8.526 L 12.637 9.16 L 18.321 9.158 L 18.321 5.792 C 18.321 5.778 18.313 5.761 18.306 5.744 C 18.298 5.726 18.291 5.709 18.294 5.698 L 18.316 5.687 L 1.895 5.687 C 1.931 5.687 1.92 5.714 1.908 5.744 L 1.903 5.758 L 1.895 5.792 L 1.895 9.158 Z M 13.263 2.632 L 13.263 3.792 L 6.947 3.792 L 6.947 2.632 L 6.952 2.489 C 6.98 2.044 7.154 1.895 7.576 1.895 L 12.631 1.895 L 12.751 1.899 C 13.126 1.931 13.263 2.128 13.263 2.632 Z M 10.742 9.474 L 10.742 10.739 L 9.476 10.739 L 9.476 9.474 L 10.742 9.474 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 3.158)\"/>"
    },
    "IconNormalBusinessBagNameBusinessBagFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.146 2.422 C 15.063 0.974 14.109 0 12.626 0 L 7.57 0 L 7.362 0.007 C 5.93 0.098 5.047 1.139 5.047 2.632 L 5.047 3.789 L 1.889 3.789 C 0.626 3.789 0 5.053 0 5.684 L 0 8.522 C 0 8.871 0.289 9.154 0.646 9.154 L 7.582 9.154 L 7.582 8.526 C 7.582 8.019 7.892 7.579 8.515 7.579 L 11.679 7.579 C 12.182 7.579 12.632 7.892 12.632 8.526 L 12.632 9.154 L 19.555 9.154 C 19.912 9.154 20.202 8.871 20.202 8.522 L 20.202 5.684 C 20.202 5.053 19.574 3.789 18.31 3.789 L 15.152 3.789 L 15.152 2.632 L 15.146 2.422 Z M 13.258 3.789 L 13.258 2.632 C 13.258 2.128 13.12 1.931 12.745 1.899 L 12.626 1.895 L 7.57 1.895 C 7.148 1.895 6.974 2.044 6.946 2.489 L 6.942 2.632 L 6.942 3.789 L 13.258 3.789 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.900 3.158)\"/><path d=\"M 7.582 11.056 L 7.582 11.686 C 7.582 12.321 8.032 12.633 8.535 12.633 L 11.699 12.633 C 12.322 12.633 12.632 12.193 12.632 11.686 L 12.632 11.059 L 19.574 11.063 C 20.103 11.063 20.202 11.368 20.202 12 L 20.202 16.737 C 20.202 17.368 19.889 17.688 19.258 17.688 L 0.942 17.688 C 0.31 17.688 0 17.368 0 16.737 L 0 12 C 0 11.368 0.08 11.053 0.626 11.053 L 7.582 11.056 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.900 3.158)\"/><path d=\"M 11.363 8.842 L 8.837 8.842 L 8.837 11.368 L 11.363 11.368 L 11.363 8.842 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.900 3.158)\"/>"
    },
    "IconNormalCalendarNameCalendar": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.314 0.819 C 6.251 0.356 5.855 0 5.375 0 C 4.852 0 4.428 0.424 4.428 0.947 L 4.428 1.263 L 1.901 1.263 L 1.72 1.271 C 0.711 1.36 0 2.19 0 3.208 L 0.007 15.79 L 0.015 15.978 C 0.101 16.963 0.867 17.684 1.901 17.684 L 18.322 17.684 L 18.513 17.676 C 19.512 17.588 20.217 16.807 20.217 15.789 L 20.217 3.158 L 20.209 2.97 C 20.122 1.984 19.356 1.263 18.322 1.263 L 17.691 1.263 L 17.562 1.272 C 17.1 1.335 16.743 1.731 16.743 2.211 C 16.743 2.734 17.168 3.158 17.691 3.158 L 18.322 3.158 L 18.322 15.789 L 1.901 15.789 L 1.895 3.207 L 1.892 3.156 L 1.901 3.158 L 4.428 3.158 L 4.428 4.105 L 4.436 4.234 C 4.499 4.696 4.895 5.053 5.375 5.053 C 5.898 5.053 6.322 4.628 6.322 4.105 L 6.322 3.158 L 13.901 3.158 L 13.901 4.105 L 13.91 4.234 C 13.973 4.696 14.369 5.053 14.849 5.053 C 15.372 5.053 15.796 4.628 15.796 4.105 L 15.796 0.947 L 15.787 0.819 C 15.725 0.356 15.328 0 14.849 0 C 14.326 0 13.901 0.424 13.901 0.947 L 13.901 1.263 L 6.322 1.263 L 6.322 0.947 L 6.314 0.819 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.888 3.158)\"/><path d=\"M 17.691 8.526 C 17.691 8.003 17.267 7.579 16.743 7.579 L 3.48 7.579 L 3.352 7.588 C 2.889 7.65 2.533 8.047 2.533 8.526 C 2.533 9.05 2.957 9.474 3.48 9.474 L 16.743 9.474 L 16.872 9.465 C 17.334 9.402 17.691 9.006 17.691 8.526 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.888 3.158)\"/>"
    },
    "IconNormalCalendarPersonNameCalendarPerson": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.55 0.9 C 13.55 0.403 13.147 0 12.65 0 C 12.153 0 11.75 0.403 11.75 0.9 L 11.75 2 L 6.55 2 L 6.55 0.9 C 6.55 0.403 6.147 0 5.65 0 C 5.153 0 4.75 0.403 4.75 0.9 L 4.75 2 L 4.065 2 C 3.535 2 3.084 2 2.713 2.03 C 2.324 2.062 1.945 2.131 1.583 2.316 C 1.038 2.594 0.594 3.037 0.316 3.583 C 0.132 3.945 0.062 4.324 0.03 4.713 C 0 5.083 0 5.534 0 6.064 L 0 16.235 C 0 16.765 0 17.216 0.03 17.586 C 0.062 17.976 0.132 18.354 0.316 18.716 C 0.594 19.262 1.038 19.705 1.583 19.984 C 1.945 20.168 2.324 20.238 2.713 20.269 C 3.084 20.3 3.535 20.3 4.064 20.3 L 8.65 20.3 C 9.147 20.3 9.55 19.897 9.55 19.4 C 9.55 18.903 9.147 18.5 8.65 18.5 L 3.7 18.5 C 2.885 18.5 2.692 18.489 2.56 18.446 C 2.225 18.337 1.963 18.074 1.854 17.74 C 1.811 17.608 1.8 17.414 1.8 16.6 L 1.8 9.549 L 16.5 9.549 L 16.5 10.65 C 16.5 11.147 16.903 11.55 17.4 11.55 C 17.897 11.55 18.3 11.147 18.3 10.65 L 18.3 6.064 C 18.3 5.534 18.3 5.083 18.27 4.713 C 18.238 4.324 18.168 3.945 17.984 3.583 C 17.706 3.037 17.262 2.594 16.717 2.316 C 16.355 2.131 15.976 2.062 15.587 2.03 C 15.216 2 14.765 2 14.235 2 L 13.55 2 L 13.55 0.9 Z M 16.5 7.749 L 1.8 7.749 L 1.8 5.7 C 1.8 4.885 1.811 4.691 1.854 4.56 C 1.963 4.225 2.225 3.962 2.56 3.853 C 2.692 3.811 2.885 3.8 3.7 3.8 L 4.75 3.8 L 4.75 4.9 C 4.75 5.397 5.153 5.8 5.65 5.8 C 6.147 5.8 6.55 5.397 6.55 4.9 L 6.55 3.8 L 11.75 3.8 L 11.75 4.9 C 11.75 5.397 12.153 5.8 12.65 5.8 C 13.147 5.8 13.55 5.397 13.55 4.9 L 13.55 3.8 L 14.6 3.8 C 15.415 3.8 15.608 3.811 15.74 3.853 C 16.075 3.962 16.337 4.225 16.446 4.56 C 16.489 4.691 16.5 4.885 16.5 5.7 L 16.5 7.749 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.850 0.850)\"/><path d=\"M 15.1 13.649 C 14.299 13.649 13.65 14.299 13.65 15.099 C 13.65 15.9 14.299 16.549 15.1 16.549 C 15.901 16.549 16.55 15.9 16.55 15.099 C 16.55 14.299 15.901 13.649 15.1 13.649 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.850 0.850)\"/><path d=\"M 15.1 17.401 C 14.275 17.401 13.497 17.597 12.909 17.981 C 12.313 18.371 11.9 18.969 11.9 19.728 C 11.9 20.045 12.156 20.301 12.473 20.301 L 17.727 20.301 C 18.043 20.301 18.3 20.045 18.3 19.728 C 18.3 18.969 17.887 18.371 17.29 17.981 C 16.703 17.597 15.924 17.401 15.1 17.401 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.850 0.850)\"/>"
    },
    "IconNormalCameraNameCameraFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 17.717 0.819 C 17.654 0.356 17.258 0 16.779 0 L 13.579 0 L 13.45 0.009 C 12.988 0.071 12.632 0.468 12.632 0.947 L 12.64 1.076 C 12.703 1.538 13.099 1.895 13.579 1.895 L 15.83 1.895 L 15.831 3.474 L 15.84 3.602 C 15.903 4.065 16.299 4.421 16.779 4.421 L 18.359 4.421 L 18.359 14.842 L 18.354 14.986 C 18.312 15.539 18.017 15.789 17.412 15.789 L 2.842 15.789 L 2.697 15.784 C 2.143 15.742 1.895 15.445 1.895 14.842 L 1.895 5.368 L 1.9 5.224 C 1.942 4.673 2.238 4.421 2.842 4.421 L 13.579 4.421 L 13.708 4.412 C 14.17 4.35 14.526 3.953 14.526 3.474 C 14.526 2.95 14.102 2.526 13.579 2.526 L 2.842 2.526 L 2.632 2.532 C 1.043 2.623 0 3.745 0 5.368 L 0 14.842 L 0.006 15.051 C 0.096 16.631 1.207 17.684 2.842 17.684 L 17.412 17.684 L 17.622 17.678 C 19.211 17.588 20.254 16.467 20.254 14.842 L 20.254 3.474 L 20.245 3.345 C 20.182 2.883 19.786 2.526 19.306 2.526 L 17.725 2.526 L 17.726 0.947 L 17.717 0.819 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 3.158)\"/><path d=\"M 10.105 5.053 C 7.315 5.053 5.053 7.315 5.053 10.105 C 5.053 12.896 7.315 15.158 10.105 15.158 C 12.896 15.158 15.158 12.896 15.158 10.105 C 15.158 7.315 12.896 5.053 10.105 5.053 Z M 10.105 6.947 C 11.849 6.947 13.263 8.361 13.263 10.105 C 13.263 11.849 11.849 13.263 10.105 13.263 C 8.361 13.263 6.947 11.849 6.947 10.105 C 6.947 8.361 8.361 6.947 10.105 6.947 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 3.158)\"/>"
    },
    "IconNormalCameraNameCameraFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.45 0.009 L 13.579 0 L 16.779 0 C 17.302 0 17.726 0.424 17.726 0.947 L 17.725 2.526 L 19.306 2.526 C 19.786 2.526 20.182 2.883 20.245 3.345 L 20.254 3.474 L 20.254 14.842 C 20.254 16.537 19.118 17.684 17.412 17.684 L 2.842 17.684 C 1.136 17.684 0 16.537 0 14.842 L 0 5.368 C 0 3.675 1.136 2.526 2.842 2.526 L 12.63 2.526 L 12.632 0.947 C 12.632 0.468 12.988 0.071 13.45 0.009 Z M 10.105 5.053 C 7.315 5.053 5.053 7.315 5.053 10.105 C 5.053 12.896 7.315 15.158 10.105 15.158 C 12.896 15.158 15.158 12.896 15.158 10.105 C 15.158 7.315 12.896 5.053 10.105 5.053 Z M 10.105 6.947 C 11.849 6.947 13.263 8.361 13.263 10.105 C 13.263 11.849 11.849 13.263 10.105 13.263 C 8.361 13.263 6.947 11.849 6.947 10.105 C 6.947 8.361 8.361 6.947 10.105 6.947 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 3.158)\"/>"
    },
    "IconNormalCaretDownNameCaretDown": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.286 0.393 L 0.181 6.077 C -0.271 6.703 0.176 7.579 0.949 7.579 L 9.16 7.579 C 9.932 7.579 10.38 6.703 9.928 6.077 L 5.822 0.393 C 5.444 -0.131 4.664 -0.131 4.286 0.393 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 -1 6.949 15.789)\"/>"
    },
    "IconNormalCaretUpNameCaretUp": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.286 0.393 L 0.181 6.077 C -0.271 6.703 0.176 7.579 0.949 7.579 L 9.16 7.579 C 9.932 7.579 10.38 6.703 9.928 6.077 L 5.822 0.393 C 5.444 -0.131 4.664 -0.131 4.286 0.393 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6.946 8.211)\"/>"
    },
    "IconNormalCheckNameCheckThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.036 0.264 C 15.388 0.615 15.388 1.185 15.036 1.536 L 6.036 10.536 C 5.685 10.888 5.115 10.888 4.764 10.536 L 0.264 6.036 C -0.088 5.685 -0.088 5.115 0.264 4.764 C 0.615 4.412 1.185 4.412 1.536 4.764 L 5.4 8.627 L 13.764 0.264 C 14.115 -0.088 14.685 -0.088 15.036 0.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.350 6.600)\"/>"
    },
    "IconNormalCheckNameCheckThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.719 0.381 C 16.227 0.888 16.227 1.712 15.719 2.219 L 6.719 11.219 C 6.212 11.727 5.388 11.727 4.881 11.219 L 0.381 6.719 C -0.127 6.212 -0.127 5.388 0.381 4.881 C 0.888 4.373 1.712 4.373 2.219 4.881 L 5.8 8.462 L 13.881 0.381 C 14.388 -0.127 15.212 -0.127 15.719 0.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 3.951 6.200)\"/>"
    },
    "IconNormalChevronDownNameChevronDownSmallThickFalseSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.264 0.264 C 0.615 -0.088 1.185 -0.088 1.536 0.264 L 7.9 6.627 L 14.264 0.264 C 14.615 -0.088 15.185 -0.088 15.536 0.264 C 15.888 0.615 15.888 1.185 15.536 1.536 L 8.536 8.536 C 8.185 8.888 7.615 8.888 7.264 8.536 L 0.264 1.536 C -0.088 1.185 -0.088 0.615 0.264 0.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.100 8.100)\"/>"
    },
    "IconNormalChevronDownNameChevronDownThickFalseSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.264 0.264 C 0.615 -0.088 1.185 -0.088 1.536 0.264 L 8.9 7.627 L 16.264 0.264 C 16.615 -0.088 17.185 -0.088 17.536 0.264 C 17.888 0.615 17.888 1.185 17.536 1.536 L 9.536 9.536 C 9.185 9.888 8.615 9.888 8.264 9.536 L 0.264 1.536 C -0.088 1.185 -0.088 0.615 0.264 0.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 3.100 7.100)\"/>"
    },
    "IconNormalChevronDownNameChevronDownThickSmallThickTrueSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.381 0.381 C 0.888 -0.127 1.712 -0.127 2.219 0.381 L 8.3 6.462 L 14.381 0.381 C 14.888 -0.127 15.712 -0.127 16.219 0.381 C 16.727 0.888 16.727 1.712 16.219 2.219 L 9.219 9.219 C 8.712 9.727 7.888 9.727 7.381 9.219 L 0.381 2.219 C -0.127 1.712 -0.127 0.888 0.381 0.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.700 7.700)\"/>"
    },
    "IconNormalChevronDownNameChevronDownThickThickTrueSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.381 0.381 C 0.888 -0.127 1.712 -0.127 2.219 0.381 L 9.3 7.462 L 16.381 0.381 C 16.888 -0.127 17.712 -0.127 18.219 0.381 C 18.727 0.888 18.727 1.712 18.219 2.219 L 10.219 10.219 C 9.712 10.727 8.888 10.727 8.381 10.219 L 0.381 2.219 C -0.127 1.712 -0.127 0.888 0.381 0.381 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.700 7.200)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftSmallTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.933 14.249 C 7.563 14.619 6.963 14.619 6.593 14.249 L 0.277 7.933 C 0.1 7.755 0 7.514 0 7.263 C 0 7.012 0.1 6.771 0.277 6.593 L 6.593 0.277 C 6.963 -0.092 7.563 -0.092 7.933 0.277 C 8.303 0.647 8.303 1.247 7.933 1.617 L 2.287 7.263 L 7.933 12.909 C 8.303 13.279 8.303 13.879 7.933 14.249 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 6.632 4.737)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftThickSmallTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.472 14.788 C 7.979 15.281 7.179 15.281 6.686 14.788 L 0.37 8.472 C 0.133 8.235 0 7.914 0 7.579 C 0 7.244 0.133 6.923 0.37 6.686 L 6.686 0.37 C 7.179 -0.123 7.979 -0.123 8.472 0.37 C 8.965 0.863 8.965 1.663 8.472 2.156 L 3.05 7.579 L 8.472 13.002 C 8.965 13.495 8.965 14.295 8.472 14.788 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 6.316 4.421)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftThickTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.051 17.946 C 9.558 18.439 8.758 18.439 8.265 17.946 L 0.37 10.051 C -0.123 9.558 -0.123 8.758 0.37 8.265 L 8.265 0.37 C 8.758 -0.123 9.558 -0.123 10.051 0.37 C 10.544 0.863 10.544 1.663 10.051 2.156 L 3.05 9.158 L 10.051 16.159 C 10.544 16.653 10.544 17.453 10.051 17.946 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 5.368 2.842)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.512 0.277 C 9.882 0.647 9.882 1.247 9.512 1.617 L 2.287 8.842 L 9.512 16.067 C 9.882 16.437 9.882 17.037 9.512 17.407 C 9.142 17.777 8.542 17.777 8.172 17.407 L 0.277 9.512 C -0.092 9.142 -0.092 8.542 0.277 8.172 L 8.172 0.277 C 8.542 -0.092 9.142 -0.092 9.512 0.277 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 5.684 3.158)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftTightSmallTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 7.933 14.249 C 7.563 14.619 6.963 14.619 6.593 14.249 L 0.277 7.933 C 0.1 7.755 0 7.514 0 7.263 C 0 7.012 0.1 6.771 0.277 6.593 L 6.593 0.277 C 6.963 -0.092 7.563 -0.092 7.933 0.277 C 8.303 0.647 8.303 1.247 7.933 1.617 L 2.287 7.263 L 7.933 12.909 C 8.303 13.279 8.303 13.879 7.933 14.249 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.579 4.737)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftTightThickSmallTightTrueT": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 8.472 14.788 C 7.979 15.281 7.179 15.281 6.686 14.788 L 0.37 8.472 C 0.133 8.235 0 7.914 0 7.579 C 0 7.244 0.133 6.923 0.37 6.686 L 6.686 0.37 C 7.179 -0.123 7.979 -0.123 8.472 0.37 C 8.965 0.863 8.965 1.663 8.472 2.156 L 3.05 7.579 L 8.472 13.002 C 8.965 13.495 8.965 14.295 8.472 14.788 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.263 4.421)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftTightThickTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 10.051 17.946 C 9.558 18.439 8.758 18.439 8.265 17.946 L 0.37 10.051 C -0.123 9.558 -0.123 8.758 0.37 8.265 L 8.265 0.37 C 8.758 -0.123 9.558 -0.123 10.051 0.37 C 10.544 0.863 10.544 1.663 10.051 2.156 L 3.05 9.158 L 10.051 16.159 C 10.544 16.653 10.544 17.453 10.051 17.946 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 2.842)\"/>"
    },
    "IconNormalChevronLeftNameChevronLeftTightTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 9.512 0.277 C 9.882 0.647 9.882 1.247 9.512 1.617 L 2.287 8.842 L 9.512 16.067 C 9.882 16.437 9.882 17.037 9.512 17.407 C 9.142 17.777 8.542 17.777 8.172 17.407 L 0.277 9.512 C -0.092 9.142 -0.092 8.542 0.277 8.172 L 8.172 0.277 C 8.542 -0.092 9.142 -0.092 9.512 0.277 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 0.316 3.158)\"/>"
    },
    "IconNormalChevronRightNameChevronRightSmallTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.277 0.277 C 0.647 -0.092 1.247 -0.092 1.617 0.277 L 7.933 6.593 C 8.111 6.771 8.211 7.012 8.211 7.263 C 8.211 7.514 8.111 7.755 7.933 7.933 L 1.617 14.249 C 1.247 14.619 0.647 14.619 0.277 14.249 C -0.092 13.879 -0.092 13.279 0.277 12.909 L 5.923 7.263 L 0.277 1.617 C -0.092 1.247 -0.092 0.647 0.277 0.277 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 9.158 4.737)\"/>"
    },
    "IconNormalChevronRightNameChevronRightThickSmallTightFalseThic": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.37 0.37 C 0.863 -0.123 1.663 -0.123 2.156 0.37 L 8.472 6.686 C 8.709 6.923 8.842 7.244 8.842 7.579 C 8.842 7.914 8.709 8.235 8.472 8.472 L 2.156 14.788 C 1.663 15.281 0.863 15.281 0.37 14.788 C -0.123 14.295 -0.123 13.495 0.37 13.002 L 5.793 7.579 L 0.37 2.156 C -0.123 1.663 -0.123 0.863 0.37 0.37 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 8.842 4.421)\"/>"
    },
    "IconNormalChevronRightNameChevronRightThickTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.37 0.37 C 0.863 -0.123 1.663 -0.123 2.156 0.37 L 10.051 8.265 C 10.544 8.758 10.544 9.558 10.051 10.051 L 2.156 17.946 C 1.663 18.439 0.863 18.439 0.37 17.946 C -0.123 17.453 -0.123 16.653 0.37 16.159 L 7.372 9.158 L 0.37 2.156 C -0.123 1.663 -0.123 0.863 0.37 0.37 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 8.211 2.842)\"/>"
    },
    "IconNormalChevronRightNameChevronRightTightFalseThick": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.277 0.277 C 0.647 -0.092 1.247 -0.092 1.617 0.277 L 9.512 8.172 C 9.882 8.542 9.882 9.142 9.512 9.512 L 1.617 17.407 C 1.247 17.777 0.647 17.777 0.277 17.407 C -0.092 17.037 -0.092 16.437 0.277 16.067 L 7.502 8.842 L 0.277 1.617 C -0.092 1.247 -0.092 0.647 0.277 0.277 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 8.526 3.158)\"/>"
    },
    "IconNormalChevronRightNameChevronRightTightSmallTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 0.277 0.277 C 0.647 -0.092 1.247 -0.092 1.617 0.277 L 7.933 6.593 C 8.111 6.771 8.211 7.012 8.211 7.263 C 8.211 7.514 8.111 7.755 7.933 7.933 L 1.617 14.249 C 1.247 14.619 0.647 14.619 0.277 14.249 C -0.092 13.879 -0.092 13.279 0.277 12.909 L 5.923 7.263 L 0.277 1.617 C -0.092 1.247 -0.092 0.647 0.277 0.277 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.210 4.737)\"/>"
    },
    "IconNormalChevronRightNameChevronRightTightThickSmallTightTrue": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 0.37 0.37 C 0.863 -0.123 1.663 -0.123 2.156 0.37 L 8.472 6.686 C 8.709 6.923 8.842 7.244 8.842 7.579 C 8.842 7.914 8.709 8.235 8.472 8.472 L 2.156 14.788 C 1.663 15.281 0.863 15.281 0.37 14.788 C -0.123 14.295 -0.123 13.495 0.37 13.002 L 5.793 7.579 L 0.37 2.156 C -0.123 1.663 -0.123 0.863 0.37 0.37 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 4.421)\"/>"
    },
    "IconNormalChevronRightNameChevronRightTightThickTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 0.37 0.37 C 0.863 -0.123 1.663 -0.123 2.156 0.37 L 10.051 8.265 C 10.544 8.758 10.544 9.558 10.051 10.051 L 2.156 17.946 C 1.663 18.439 0.863 18.439 0.37 17.946 C -0.123 17.453 -0.123 16.653 0.37 16.159 L 7.372 9.158 L 0.37 2.156 C -0.123 1.663 -0.123 0.863 0.37 0.37 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 1.579 2.842)\"/>"
    },
    "IconNormalChevronRightNameChevronRightTightTightTrueThick": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 0.277 0.277 C 0.647 -0.092 1.247 -0.092 1.617 0.277 L 9.512 8.172 C 9.882 8.542 9.882 9.142 9.512 9.512 L 1.617 17.407 C 1.247 17.777 0.647 17.777 0.277 17.407 C -0.092 17.037 -0.092 16.437 0.277 16.067 L 7.502 8.842 L 0.277 1.617 C -0.092 1.247 -0.092 0.647 0.277 0.277 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 1.895 3.158)\"/>"
    },
    "IconNormalChevronUpNameChevronUpSmallThickFalseSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7.9 2.173 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 4.100 7.100)\"/>"
    },
    "IconNormalChevronUpNameChevronUpThickFalseSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.264 9.536 C 0.615 9.888 1.185 9.888 1.536 9.536 L 8.9 2.173 L 16.264 9.536 C 16.615 9.888 17.185 9.888 17.536 9.536 C 17.888 9.185 17.888 8.615 17.536 8.264 L 9.536 0.264 C 9.185 -0.088 8.615 -0.088 8.264 0.264 L 0.264 8.264 C -0.088 8.615 -0.088 9.185 0.264 9.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.000 0) matrix(1 0 0 1 3.100 6.600)\"/>"
    },
    "IconNormalChevronUpNameChevronUpThickSmallThickTrueSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.381 9.219 C 0.888 9.727 1.712 9.727 2.219 9.219 L 8.3 3.138 L 14.381 9.219 C 14.888 9.727 15.712 9.727 16.219 9.219 C 16.727 8.712 16.727 7.888 16.219 7.381 L 9.219 0.381 C 8.712 -0.127 7.888 -0.127 7.381 0.381 L 0.381 7.381 C -0.127 7.888 -0.127 8.712 0.381 9.219 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 3.700 6.700)\"/>"
    },
    "IconNormalChevronUpNameChevronUpThickThickTrueSmall": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.381 10.219 C 0.888 10.727 1.712 10.727 2.219 10.219 L 9.3 3.138 L 16.381 10.219 C 16.888 10.727 17.712 10.727 18.219 10.219 C 18.727 9.712 18.727 8.888 18.219 8.381 L 10.219 0.381 C 9.712 -0.127 8.888 -0.127 8.381 0.381 L 0.381 8.381 C -0.127 8.888 -0.127 9.712 0.381 10.219 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 2.700 6.200)\"/>"
    },
    "IconNormalCircleCheck2NameCircleCheckFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.547 7.776 C 14.892 7.419 14.883 6.849 14.526 6.503 C 14.169 6.158 13.599 6.167 13.253 6.524 L 8.577 11.355 L 6.548 9.252 C 6.202 8.895 5.633 8.885 5.275 9.23 C 4.917 9.575 4.907 10.145 5.252 10.502 L 7.929 13.275 C 8.098 13.451 8.332 13.55 8.576 13.55 C 8.82 13.55 9.053 13.451 9.223 13.276 L 14.547 7.776 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.373 1.8 18 5.426 18 9.9 C 18 14.374 14.373 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleCheck2NameCircleCheckFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 14.547 7.776 C 14.892 7.419 14.883 6.849 14.526 6.503 C 14.169 6.158 13.599 6.167 13.253 6.524 L 8.577 11.355 L 6.547 9.252 C 6.202 8.894 5.633 8.884 5.275 9.23 C 4.917 9.575 4.907 10.145 5.252 10.502 L 7.929 13.275 C 8.098 13.451 8.332 13.55 8.576 13.55 C 8.82 13.55 9.053 13.451 9.223 13.276 L 14.547 7.776 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleClose2NameCircleCloseFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.536 6.264 C 7.185 5.913 6.615 5.913 6.263 6.264 C 5.912 6.615 5.912 7.185 6.263 7.537 L 8.627 9.9 L 6.263 12.264 C 5.912 12.615 5.912 13.185 6.263 13.537 C 6.615 13.888 7.185 13.888 7.536 13.537 L 9.9 11.173 L 12.263 13.537 C 12.615 13.888 13.185 13.888 13.536 13.537 C 13.888 13.185 13.888 12.615 13.536 12.264 L 11.173 9.9 L 13.536 7.537 C 13.888 7.185 13.888 6.615 13.536 6.264 C 13.185 5.913 12.615 5.913 12.263 6.264 L 9.9 8.628 L 7.536 6.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.367 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.367 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.373 1.8 18 5.426 18 9.9 C 18 14.374 14.373 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleClose2NameCircleCloseFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 7.036 5.764 C 6.685 5.412 6.115 5.412 5.764 5.764 C 5.412 6.115 5.412 6.685 5.764 7.036 L 8.627 9.9 L 5.764 12.764 C 5.412 13.115 5.412 13.685 5.764 14.036 C 6.115 14.388 6.685 14.388 7.036 14.036 L 9.9 11.173 L 12.763 14.036 C 13.115 14.388 13.685 14.388 14.036 14.036 C 14.388 13.685 14.388 13.115 14.036 12.764 L 11.173 9.9 L 14.036 7.036 C 14.388 6.685 14.388 6.115 14.036 5.764 C 13.685 5.412 13.115 5.412 12.763 5.764 L 9.9 8.627 L 7.036 5.764 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleExclamation2NameCircleExclamationFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.9 13.9 C 10.9 14.452 10.452 14.9 9.9 14.9 C 9.348 14.9 8.9 14.452 8.9 13.9 C 8.9 13.348 9.348 12.9 9.9 12.9 C 10.452 12.9 10.9 13.348 10.9 13.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 10.8 5.9 C 10.8 5.403 10.397 5 9.9 5 C 9.403 5 9 5.403 9 5.9 L 9 10.4 C 9 10.897 9.403 11.3 9.9 11.3 C 10.397 11.3 10.8 10.897 10.8 10.4 L 10.8 5.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 9.9 1.8 C 5.426 1.8 1.8 5.426 1.8 9.9 C 1.8 14.374 5.426 18 9.9 18 C 14.373 18 18 14.374 18 9.9 C 18 5.426 14.373 1.8 9.9 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleExclamation2NameCircleExclamationFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 9.9 5 C 10.397 5 10.8 5.403 10.8 5.9 L 10.8 10.4 C 10.8 10.897 10.397 11.3 9.9 11.3 C 9.403 11.3 9 10.897 9 10.4 L 9 5.9 C 9 5.403 9.403 5 9.9 5 Z M 10.9 13.9 C 10.9 14.452 10.452 14.9 9.9 14.9 C 9.347 14.9 8.9 14.452 8.9 13.9 C 8.9 13.348 9.347 12.9 9.9 12.9 C 10.452 12.9 10.9 13.348 10.9 13.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleInfo2NameCircleInfoFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.9 5.9 C 10.9 6.452 10.452 6.9 9.9 6.9 C 9.348 6.9 8.9 6.452 8.9 5.9 C 8.9 5.348 9.348 4.9 9.9 4.9 C 10.452 4.9 10.9 5.348 10.9 5.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 10.8 9.4 C 10.8 8.903 10.397 8.5 9.9 8.5 C 9.403 8.5 9 8.903 9 9.4 L 9 13.9 C 9 14.397 9.403 14.8 9.9 14.8 C 10.397 14.8 10.8 14.397 10.8 13.9 L 10.8 9.4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 9.9 1.8 C 5.426 1.8 1.8 5.426 1.8 9.9 C 1.8 14.374 5.426 18 9.9 18 C 14.373 18 18 14.374 18 9.9 C 18 5.426 14.373 1.8 9.9 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleInfo2NameCircleInfoFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 10.9 5.9 C 10.9 6.452 10.452 6.9 9.9 6.9 C 9.348 6.9 8.9 6.452 8.9 5.9 C 8.9 5.348 9.348 4.9 9.9 4.9 C 10.452 4.9 10.9 5.348 10.9 5.9 Z M 9.9 8.5 C 10.397 8.5 10.8 8.903 10.8 9.4 L 10.8 13.9 C 10.8 14.397 10.397 14.8 9.9 14.8 C 9.403 14.8 9 14.397 9 13.9 L 9 9.4 C 9 8.903 9.403 8.5 9.9 8.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleNameCircleFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.9 1.8 C 5.426 1.8 1.8 5.426 1.8 9.9 C 1.8 14.374 5.426 18 9.9 18 C 14.373 18 18 14.374 18 9.9 C 18 5.426 14.373 1.8 9.9 1.8 Z M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleNameCircleFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCirclePlus2NameCirclePlusFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.8 5.9 C 10.8 5.403 10.397 5 9.9 5 C 9.403 5 9 5.403 9 5.9 L 9 9 L 5.9 9 C 5.403 9 5 9.403 5 9.9 C 5 10.397 5.403 10.8 5.9 10.8 L 9 10.8 L 9 13.9 C 9 14.397 9.403 14.8 9.9 14.8 C 10.397 14.8 10.8 14.397 10.8 13.9 L 10.8 10.8 L 13.9 10.8 C 14.397 10.8 14.8 10.397 14.8 9.9 C 14.8 9.403 14.397 9 13.9 9 L 10.8 9 L 10.8 5.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.373 1.8 18 5.426 18 9.9 C 18 14.374 14.373 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCirclePlus2NameCirclePlusFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 10.8 5.65 C 10.8 5.153 10.397 4.75 9.9 4.75 C 9.403 4.75 9 5.153 9 5.65 L 9 9 L 5.65 9 C 5.153 9 4.75 9.403 4.75 9.9 C 4.75 10.397 5.153 10.8 5.65 10.8 L 9 10.8 L 9 14.15 C 9 14.647 9.403 15.05 9.9 15.05 C 10.397 15.05 10.8 14.647 10.8 14.15 L 10.8 10.8 L 14.15 10.8 C 14.647 10.8 15.05 10.397 15.05 9.9 C 15.05 9.403 14.647 9 14.15 9 L 10.8 9 L 10.8 5.65 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleQuestion2NameCircleQuestionFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.09 10.915 C 9.003 11.392 9.409 11.791 9.894 11.791 C 10.378 11.791 10.745 11.384 10.907 10.928 C 11.12 10.326 11.553 9.965 11.984 9.605 C 12.581 9.105 13.175 8.609 13.175 7.479 C 13.175 5.731 11.759 4.702 9.955 4.702 C 8.317 4.702 7.081 5.566 6.719 6.968 C 6.598 7.438 7.005 7.839 7.49 7.839 C 7.974 7.839 8.329 7.42 8.554 6.992 C 8.795 6.531 9.259 6.268 9.886 6.263 C 10.75 6.27 11.351 6.768 11.351 7.548 C 11.351 8.181 10.955 8.482 10.49 8.836 C 9.945 9.25 9.304 9.738 9.09 10.915 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 8.781 13.96 C 8.774 14.582 9.244 15.038 9.9 15.038 C 10.543 15.038 11.012 14.582 11.019 13.96 C 11.012 13.338 10.543 12.882 9.9 12.882 C 9.244 12.882 8.774 13.338 8.781 13.96 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.373 1.8 18 5.426 18 9.9 C 18 14.374 14.373 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCircleQuestion2NameCircleQuestionFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 9.01 11.016 C 8.913 11.541 9.36 11.98 9.893 11.98 C 10.426 11.98 10.83 11.533 11.01 11.032 C 11.245 10.381 11.717 9.984 12.187 9.589 C 12.846 9.035 13.502 8.483 13.502 7.237 C 13.502 5.315 11.944 4.182 9.961 4.182 C 8.158 4.182 6.798 5.132 6.401 6.675 C 6.268 7.192 6.716 7.633 7.249 7.633 C 7.781 7.633 8.172 7.172 8.419 6.701 C 8.684 6.194 9.194 5.905 9.885 5.9 C 10.835 5.907 11.496 6.455 11.496 7.313 C 11.496 8.01 11.059 8.346 10.545 8.74 C 9.948 9.198 9.246 9.736 9.01 11.016 Z M 8.669 14.366 C 8.661 15.05 9.178 15.552 9.9 15.552 C 10.607 15.552 11.123 15.05 11.131 14.366 C 11.123 13.682 10.607 13.181 9.9 13.181 C 9.178 13.181 8.661 13.682 8.669 14.366 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalClockNameClockFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.4 4.5 C 9.897 4.5 10.3 4.903 10.3 5.4 L 10.3 10.027 L 12.511 12.238 C 12.862 12.59 12.862 13.159 12.511 13.511 C 12.159 13.862 11.59 13.862 11.238 13.511 L 8.763 11.036 C 8.584 10.856 8.496 10.62 8.5 10.385 L 8.5 5.4 C 8.5 4.903 8.903 4.5 9.4 4.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.373 1.8 18 5.426 18 9.9 C 18 14.374 14.373 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalClockNameClockFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 9.4 3.999 C 9.897 3.999 10.3 4.402 10.3 4.899 L 10.3 10.027 L 12.615 12.341 C 12.966 12.693 12.966 13.263 12.615 13.614 C 12.263 13.966 11.693 13.966 11.342 13.614 L 8.763 11.036 C 8.584 10.856 8.496 10.62 8.5 10.385 L 8.5 4.899 C 8.5 4.402 8.903 3.999 9.4 3.999 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCloseNameCloseThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.511 0.186 C 1.14 -0.089 0.614 -0.059 0.277 0.277 C -0.092 0.647 -0.092 1.247 0.277 1.617 L 6.239 7.579 L 0.277 13.541 L 0.186 13.647 C -0.089 14.018 -0.059 14.544 0.277 14.88 L 0.384 14.972 C 0.755 15.247 1.281 15.217 1.617 14.88 L 7.579 8.919 L 13.541 14.88 L 13.647 14.972 C 14.018 15.247 14.544 15.217 14.88 14.88 C 15.25 14.51 15.25 13.911 14.88 13.541 L 8.919 7.579 L 14.88 1.617 L 14.972 1.511 C 15.247 1.14 15.217 0.614 14.88 0.277 L 14.774 0.186 C 14.403 -0.089 13.877 -0.059 13.541 0.277 L 7.579 6.239 L 1.617 0.277 L 1.511 0.186 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.421 4.421)\"/>"
    },
    "IconNormalCloseNameCloseThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.156 0.37 C 1.663 -0.123 0.863 -0.123 0.37 0.37 C -0.123 0.863 -0.123 1.663 0.37 2.156 L 6.108 7.895 L 0.37 13.633 C -0.123 14.126 -0.123 14.926 0.37 15.42 C 0.863 15.913 1.663 15.913 2.156 15.42 L 7.895 9.681 L 13.633 15.42 C 14.126 15.913 14.926 15.913 15.42 15.42 C 15.913 14.926 15.913 14.126 15.42 13.633 L 9.681 7.895 L 15.42 2.156 C 15.913 1.663 15.913 0.863 15.42 0.37 C 14.926 -0.123 14.126 -0.123 13.633 0.37 L 7.895 6.108 L 2.156 0.37 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 4.105 4.105)\"/>"
    },
    "IconNormalCoinsNameCoinsFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 3.911 C 0 3.907 0 3.904 0 3.9 C 0 2.422 1.3 1.46 2.683 0.908 C 4.153 0.321 6.151 0 8.4 0 C 10.649 0 12.647 0.321 14.117 0.908 C 15.498 1.46 16.795 2.419 16.8 3.892 C 16.8 3.895 16.8 3.898 16.8 3.9 L 16.8 15.15 L 16.8 15.16 C 16.794 16.632 15.497 17.591 14.117 18.142 C 12.647 18.729 10.649 19.05 8.4 19.05 C 6.15 19.05 4.153 18.729 2.683 18.142 C 1.3 17.59 0 16.628 0 15.15 L 0 15.144 L 0 11.411 L 0 11.4 L 0 11.394 L 0 7.661 L 0 7.65 L 0 7.644 L 0 3.911 Z M 1.8 3.896 C 1.802 3.623 2.079 3.088 3.351 2.58 C 4.542 2.104 6.295 1.8 8.4 1.8 C 10.505 1.8 12.258 2.104 13.449 2.58 C 14.727 3.09 15 3.628 15 3.9 C 15 4.172 14.727 4.71 13.449 5.22 C 12.258 5.696 10.505 6 8.4 6 C 6.295 6 4.542 5.696 3.351 5.22 C 2.08 4.713 1.803 4.178 1.8 3.904 L 1.8 3.9 L 1.8 3.896 Z M 15 6.47 L 15 7.643 L 15 7.65 C 15 7.922 14.727 8.46 13.449 8.971 C 12.258 9.446 10.505 9.75 8.4 9.75 C 6.295 9.75 4.542 9.446 3.351 8.97 C 2.08 8.463 1.803 7.928 1.8 7.655 L 1.8 6.469 C 2.082 6.63 2.381 6.771 2.683 6.892 C 4.153 7.479 6.15 7.8 8.4 7.8 C 10.649 7.8 12.647 7.479 14.117 6.892 C 14.419 6.771 14.718 6.631 15 6.47 Z M 1.8 11.405 L 1.8 10.22 C 2.082 10.381 2.381 10.521 2.683 10.642 C 4.153 11.229 6.15 11.55 8.4 11.55 C 10.649 11.55 12.647 11.229 14.117 10.642 C 14.419 10.521 14.718 10.381 15 10.22 L 15 11.393 L 15 11.4 C 15 11.672 14.727 12.21 13.449 12.721 C 12.258 13.196 10.505 13.5 8.4 13.5 C 6.295 13.5 4.542 13.196 3.351 12.72 C 2.08 12.213 1.803 11.678 1.8 11.405 Z M 14.117 14.392 C 14.419 14.271 14.718 14.131 15 13.97 L 15 15.143 L 15 15.15 C 15 15.422 14.727 15.96 13.449 16.471 C 12.258 16.946 10.505 17.25 8.4 17.25 C 6.295 17.25 4.542 16.946 3.351 16.47 C 2.079 15.962 1.803 15.427 1.8 15.154 L 1.8 15.15 L 1.8 13.97 C 2.082 14.131 2.381 14.271 2.683 14.392 C 4.153 14.979 6.15 15.3 8.4 15.3 C 10.649 15.3 12.647 14.979 14.117 14.392 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.349)\"/>"
    },
    "IconNormalCoinsNameCoinsFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.683 0.908 C 4.153 0.321 6.151 0 8.4 0 C 10.649 0 12.647 0.321 14.117 0.908 C 15.498 1.46 16.795 2.419 16.8 3.892 C 16.8 3.895 16.8 3.898 16.8 3.9 L 16.8 15.15 L 16.8 15.161 C 16.794 16.632 15.497 17.591 14.117 18.142 C 12.647 18.729 10.649 19.051 8.4 19.05 C 6.15 19.05 4.153 18.729 2.683 18.142 C 1.3 17.59 0 16.628 0 15.15 L 0 15.144 L 0 11.411 L 0 11.4 L 0 11.394 L 0 7.661 L 0 7.65 L 0 7.644 L 0 3.911 C 0 3.907 0 3.904 0 3.9 C 0 2.422 1.3 1.46 2.683 0.908 Z M 1.8 6.469 L 1.8 7.655 C 1.803 7.928 2.08 8.463 3.351 8.97 C 4.542 9.446 6.295 9.75 8.4 9.75 C 10.505 9.751 12.258 9.446 13.449 8.971 C 14.727 8.461 15 7.922 15 7.65 L 15 7.644 L 15 6.47 C 14.718 6.631 14.419 6.771 14.117 6.892 C 12.647 7.479 10.649 7.8 8.4 7.8 C 6.15 7.8 4.153 7.479 2.683 6.892 C 2.381 6.771 2.082 6.63 1.8 6.469 Z M 1.8 11.405 L 1.8 10.22 C 2.082 10.381 2.381 10.521 2.683 10.642 C 4.153 11.229 6.15 11.55 8.4 11.55 C 10.649 11.551 12.647 11.229 14.117 10.642 C 14.419 10.522 14.718 10.381 15 10.22 L 15 11.393 L 15 11.4 C 15 11.672 14.727 12.211 13.449 12.721 C 12.258 13.196 10.505 13.501 8.4 13.5 C 6.295 13.5 4.542 13.196 3.351 12.72 C 2.08 12.213 1.803 11.678 1.8 11.405 Z M 14.117 14.392 C 14.419 14.272 14.718 14.131 15 13.97 L 15 15.143 L 15 15.15 C 15 15.422 14.727 15.961 13.449 16.471 C 12.258 16.946 10.505 17.251 8.4 17.25 C 6.295 17.25 4.542 16.946 3.351 16.47 C 2.079 15.963 1.803 15.427 1.8 15.154 L 1.8 15.15 L 1.8 13.97 C 2.082 14.131 2.381 14.271 2.683 14.392 C 4.153 14.979 6.15 15.3 8.4 15.3 C 10.649 15.301 12.647 14.979 14.117 14.392 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.349)\"/>"
    },
    "IconNormalCompany2NameCompanyFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.5 8.9 C 3.5 8.403 3.903 8 4.4 8 L 8.4 8 C 8.897 8 9.3 8.403 9.3 8.9 C 9.3 9.397 8.897 9.8 8.4 9.8 L 4.4 9.8 C 3.903 9.8 3.5 9.397 3.5 8.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.600 2.100)\"/><path d=\"M 3.5 4.9 C 3.5 4.403 3.903 4 4.4 4 L 8.4 4 C 8.897 4 9.3 4.403 9.3 4.9 C 9.3 5.397 8.897 5.8 8.4 5.8 L 4.4 5.8 C 3.903 5.8 3.5 5.397 3.5 4.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.600 2.100)\"/><path d=\"M 3.267 0 C 2.875 0 2.529 0 2.242 0.023 C 1.936 0.048 1.619 0.104 1.31 0.262 C 0.859 0.492 0.492 0.859 0.262 1.31 C 0.104 1.619 0.048 1.936 0.023 2.242 C 0 2.529 0 2.875 0 3.267 L 0 19.8 L 6.386 19.8 C 6.391 19.8 6.395 19.8 6.4 19.8 C 6.404 19.8 6.409 19.8 6.413 19.8 L 11.879 19.8 L 11.9 19.8 L 11.921 19.8 L 18.8 19.8 L 18.8 11.267 C 18.8 10.875 18.8 10.529 18.777 10.242 C 18.752 9.936 18.696 9.619 18.538 9.31 C 18.308 8.859 17.941 8.492 17.49 8.262 C 17.181 8.104 16.864 8.048 16.558 8.023 C 16.271 8 15.925 8 15.533 8 L 12.8 8 L 12.8 3.267 C 12.8 2.875 12.8 2.529 12.777 2.242 C 12.752 1.936 12.696 1.619 12.538 1.31 C 12.308 0.859 11.941 0.492 11.49 0.262 C 11.181 0.104 10.864 0.048 10.558 0.023 C 10.271 0 9.925 0 9.533 0 L 3.267 0 Z M 7.3 18 L 11 18 L 11 3 C 11 2.372 10.989 2.271 10.971 2.215 C 10.911 2.032 10.768 1.889 10.585 1.829 C 10.529 1.811 10.428 1.8 9.8 1.8 L 3 1.8 C 2.372 1.8 2.271 1.811 2.215 1.829 C 2.032 1.889 1.889 2.032 1.829 2.215 C 1.811 2.271 1.8 2.372 1.8 3 L 1.8 18 L 5.5 18 L 5.5 14.9 C 5.5 14.403 5.903 14 6.4 14 C 6.897 14 7.3 14.403 7.3 14.9 L 7.3 18 Z M 17 18 L 12.8 18 L 12.8 9.8 L 15.8 9.8 C 16.428 9.8 16.529 9.811 16.585 9.829 C 16.768 9.889 16.911 10.032 16.971 10.215 C 16.989 10.271 17 10.372 17 11 L 17 18 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.600 2.100)\"/>"
    },
    "IconNormalCompany2NameCompanyFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.267 0 L 9.533 0 C 9.925 0 10.271 0 10.558 0.023 C 10.864 0.048 11.181 0.104 11.49 0.262 C 11.941 0.492 12.308 0.859 12.538 1.31 C 12.696 1.619 12.752 1.936 12.777 2.242 C 12.8 2.529 12.8 2.875 12.8 3.267 L 12.8 8 L 15.533 8 C 15.925 8 16.271 8 16.558 8.023 C 16.864 8.048 17.181 8.104 17.49 8.262 C 17.941 8.492 18.308 8.859 18.538 9.31 C 18.696 9.619 18.752 9.936 18.777 10.242 C 18.8 10.529 18.8 10.875 18.8 11.267 L 18.8 19.8 L 13.8 19.8 L 13.8 15.65 C 13.8 15.153 13.397 14.75 12.9 14.75 C 12.403 14.75 12 15.153 12 15.65 L 12 19.8 L 11.921 19.8 L 11.9 19.8 L 11.879 19.8 L 0 19.8 L 0 3.267 C 0 2.875 0 2.529 0.023 2.242 C 0.048 1.936 0.104 1.619 0.262 1.31 C 0.492 0.859 0.859 0.492 1.31 0.262 C 1.619 0.104 1.936 0.048 2.242 0.023 C 2.529 0 2.875 0 3.267 0 Z M 3.5 8.9 C 3.5 8.403 3.903 8 4.4 8 L 8.4 8 C 8.897 8 9.3 8.403 9.3 8.9 C 9.3 9.397 8.897 9.8 8.4 9.8 L 4.4 9.8 C 3.903 9.8 3.5 9.397 3.5 8.9 Z M 3.5 4.9 C 3.5 4.403 3.903 4 4.4 4 L 8.4 4 C 8.897 4 9.3 4.403 9.3 4.9 C 9.3 5.397 8.897 5.8 8.4 5.8 L 4.4 5.8 C 3.903 5.8 3.5 5.397 3.5 4.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.600 2.100)\"/>"
    },
    "IconNormalCompassNameCompassFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.822 7.571 C 7.726 7.641 7.641 7.726 7.571 7.822 C 7.484 7.941 7.431 8.073 7.418 8.106 L 7.416 8.112 L 5.549 12.563 C 5.499 12.683 5.44 12.822 5.402 12.942 C 5.37 13.042 5.275 13.34 5.383 13.676 C 5.497 14.027 5.772 14.303 6.124 14.417 C 6.459 14.525 6.758 14.43 6.857 14.398 C 6.978 14.36 7.117 14.301 7.237 14.251 L 11.688 12.384 L 11.694 12.382 C 11.727 12.369 11.859 12.316 11.977 12.229 C 12.074 12.159 12.159 12.074 12.229 11.978 C 12.315 11.859 12.368 11.727 12.382 11.694 L 12.384 11.688 L 14.251 7.237 C 14.301 7.117 14.359 6.978 14.398 6.858 C 14.429 6.758 14.525 6.46 14.416 6.124 C 14.303 5.773 14.027 5.497 13.675 5.383 C 13.34 5.275 13.041 5.37 12.942 5.402 C 12.822 5.44 12.682 5.499 12.563 5.549 L 8.112 7.416 L 8.106 7.418 C 8.073 7.431 7.941 7.484 7.822 7.571 Z M 10.9 9.901 C 10.9 10.453 10.452 10.901 9.9 10.901 C 9.348 10.901 8.9 10.453 8.9 9.901 C 8.9 9.348 9.348 8.901 9.9 8.901 C 10.452 8.901 10.9 9.348 10.9 9.901 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 1.8 9.9 C 1.8 5.426 5.426 1.8 9.9 1.8 C 14.374 1.8 18 5.426 18 9.9 C 18 14.374 14.374 18 9.9 18 C 5.426 18 1.8 14.374 1.8 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCompassNameCompassFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.4 9.901 C 11.4 10.729 10.728 11.401 9.9 11.401 C 9.071 11.401 8.4 10.729 8.4 9.901 C 8.4 9.072 9.071 8.401 9.9 8.401 C 10.728 8.401 11.4 9.072 11.4 9.901 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 7.809 7.577 C 7.721 7.643 7.643 7.721 7.577 7.81 C 7.495 7.918 7.443 8.038 7.43 8.068 L 7.427 8.073 L 5.268 12.824 C 5.21 12.952 5.144 13.097 5.1 13.221 L 5.099 13.224 C 5.064 13.322 4.954 13.632 5.062 13.98 C 5.174 14.342 5.458 14.626 5.82 14.738 C 6.168 14.846 6.478 14.736 6.576 14.701 L 6.579 14.7 C 6.703 14.656 6.848 14.59 6.976 14.532 L 11.727 12.373 L 11.732 12.37 C 11.762 12.357 11.882 12.305 11.991 12.224 C 12.079 12.158 12.157 12.079 12.223 11.991 C 12.304 11.883 12.357 11.763 12.37 11.733 L 12.372 11.727 L 14.531 6.977 C 14.59 6.849 14.656 6.704 14.7 6.58 L 14.701 6.576 C 14.736 6.478 14.845 6.169 14.737 5.821 C 14.625 5.458 14.342 5.175 13.979 5.063 C 13.631 4.955 13.322 5.064 13.224 5.099 L 13.22 5.1 C 13.096 5.144 12.952 5.21 12.823 5.269 L 8.073 7.428 L 8.067 7.43 C 8.037 7.443 7.918 7.496 7.809 7.577 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalCopyNameCopy": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.474 0 L 0.947 0 C 0.424 0 0 0.424 0 0.947 L 0 15.474 C 0 15.997 0.424 16.421 0.947 16.421 L 3.789 16.421 L 3.789 19.263 L 3.798 19.392 C 3.861 19.854 4.257 20.211 4.737 20.211 L 19.263 20.211 L 19.392 20.202 C 19.854 20.139 20.211 19.743 20.211 19.263 L 20.211 4.737 L 20.202 4.608 C 20.139 4.146 19.743 3.789 19.263 3.789 L 19.135 3.798 C 18.672 3.861 18.316 4.257 18.316 4.737 L 18.315 18.315 L 5.683 18.315 L 5.684 16.421 L 15.474 16.421 C 15.997 16.421 16.421 15.997 16.421 15.474 L 16.421 0.947 C 16.421 0.424 15.997 0 15.474 0 Z M 14.525 1.895 L 14.525 14.526 L 1.893 14.526 L 1.893 1.895 L 14.525 1.895 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 1.895)\"/>"
    },
    "IconNormalCrownNameCrownFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.134 0.38 C 9.966 0.142 9.692 0 9.4 0 C 9.108 0 8.834 0.142 8.666 0.38 L 6.262 3.773 C 5.93 4.241 5.712 4.548 5.527 4.769 C 5.348 4.983 5.249 5.054 5.184 5.088 C 4.978 5.196 4.744 5.236 4.514 5.203 C 4.441 5.193 4.324 5.158 4.085 5.017 C 3.836 4.87 3.528 4.653 3.059 4.322 L 1.419 3.165 C 1.13 2.961 0.748 2.945 0.444 3.124 C 0.139 3.304 -0.033 3.645 0.005 3.997 L 1.005 13.247 C 1.055 13.704 1.44 14.05 1.9 14.05 L 16.9 14.05 C 17.36 14.05 17.745 13.704 17.795 13.247 L 18.795 3.997 C 18.833 3.645 18.661 3.304 18.356 3.124 C 18.052 2.945 17.67 2.961 17.381 3.165 L 15.741 4.322 C 15.272 4.653 14.964 4.87 14.715 5.017 C 14.476 5.158 14.359 5.193 14.286 5.203 C 14.056 5.236 13.822 5.196 13.616 5.088 C 13.551 5.054 13.452 4.983 13.273 4.769 C 13.088 4.548 12.87 4.241 12.538 3.773 L 10.134 0.38 Z M 9.4 2.457 L 11.374 5.244 C 11.729 5.746 12.023 6.163 12.394 6.439 C 13.138 6.994 14.102 7.159 14.987 6.884 C 15.429 6.747 15.846 6.453 16.348 6.097 L 16.791 5.784 L 16.092 12.25 L 2.708 12.25 L 2.009 5.784 L 2.452 6.097 C 2.954 6.453 3.371 6.747 3.813 6.884 C 4.698 7.159 5.662 6.994 6.405 6.439 C 6.777 6.163 7.071 5.746 7.426 5.244 L 9.4 2.457 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.600 2.599)\"/><path d=\"M 2.4 16.5 C 1.903 16.5 1.5 16.903 1.5 17.4 C 1.5 17.897 1.903 18.3 2.4 18.3 L 16.4 18.3 C 16.897 18.3 17.3 17.897 17.3 17.4 C 17.3 16.903 16.897 16.5 16.4 16.5 L 2.4 16.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.600 2.599)\"/>"
    },
    "IconNormalCrownNameCrownFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.4 0 C 9.692 0 9.966 0.142 10.134 0.38 L 12.538 3.773 C 12.87 4.241 13.088 4.548 13.273 4.769 C 13.452 4.983 13.551 5.054 13.616 5.088 C 13.822 5.196 14.056 5.236 14.286 5.203 C 14.359 5.193 14.476 5.158 14.715 5.017 C 14.964 4.87 15.272 4.653 15.741 4.322 L 17.381 3.165 C 17.67 2.961 18.052 2.945 18.356 3.124 C 18.661 3.304 18.833 3.645 18.795 3.997 L 17.795 13.247 C 17.745 13.704 17.36 14.05 16.9 14.05 L 1.9 14.05 C 1.44 14.05 1.055 13.704 1.005 13.247 L 0.005 3.997 C -0.033 3.645 0.139 3.304 0.444 3.124 C 0.748 2.945 1.13 2.961 1.419 3.165 L 3.059 4.322 C 3.528 4.653 3.836 4.87 4.085 5.017 C 4.324 5.158 4.441 5.193 4.514 5.203 C 4.744 5.236 4.978 5.196 5.184 5.088 C 5.249 5.054 5.348 4.983 5.527 4.769 C 5.712 4.548 5.93 4.241 6.262 3.773 L 8.666 0.38 C 8.834 0.142 9.108 0 9.4 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.600 2.599)\"/><path d=\"M 2.4 16.5 C 1.903 16.5 1.5 16.903 1.5 17.4 C 1.5 17.897 1.903 18.3 2.4 18.3 L 16.4 18.3 C 16.897 18.3 17.3 17.897 17.3 17.4 C 17.3 16.903 16.897 16.5 16.4 16.5 L 2.4 16.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.600 2.599)\"/>"
    },
    "IconNormalDiamondNameDiamondFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.511 0.001 L 6.416 0 C 6.057 -0.001 5.627 -0.003 5.236 0.18 C 4.846 0.363 4.572 0.695 4.343 0.972 L 4.283 1.044 L 0.969 5.021 C 0.728 5.309 0.497 5.587 0.334 5.842 C 0.151 6.128 -0.009 6.479 0 6.913 C 0.01 7.347 0.185 7.691 0.381 7.969 C 0.555 8.217 0.798 8.484 1.051 8.761 L 8.716 17.174 C 9.03 17.519 9.326 17.843 9.603 18.073 C 9.91 18.329 10.306 18.566 10.824 18.566 C 11.342 18.566 11.738 18.329 12.045 18.073 C 12.322 17.843 12.617 17.519 12.931 17.174 L 20.596 8.761 C 20.849 8.484 21.092 8.217 21.267 7.969 C 21.462 7.691 21.638 7.347 21.647 6.913 C 21.657 6.479 21.497 6.128 21.314 5.842 C 21.151 5.587 20.919 5.309 20.679 5.021 L 17.365 1.044 L 17.305 0.972 C 17.076 0.695 16.802 0.363 16.411 0.18 C 16.021 -0.003 15.591 -0.001 15.231 0 L 15.137 0.001 L 6.511 0.001 Z M 10.824 5.534 L 7.557 1.801 L 14.09 1.801 L 10.824 5.534 Z M 12.807 6.001 L 16.057 2.286 L 19.152 6.001 L 12.807 6.001 Z M 5.591 2.286 L 8.84 6.001 L 2.495 6.001 L 5.591 2.286 Z M 9.924 15.826 L 9.924 7.801 L 2.611 7.801 L 9.924 15.826 Z M 11.724 7.801 L 11.724 15.826 L 19.036 7.801 L 11.724 7.801 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.176 3.100)\"/>"
    },
    "IconNormalDiamondNameDiamondFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.163 0.9 C 4.143 0.924 4.123 0.948 4.104 0.972 L 4.044 1.044 L 0.728 5.022 C 0.488 5.31 0.257 5.587 0.094 5.842 C 0.062 5.893 0.03 5.946 0 6.001 L 8.414 6.001 L 4.163 0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.666 3.100)\"/><path d=\"M 0.031 7.801 C 0.066 7.859 0.103 7.915 0.14 7.968 C 0.314 8.216 0.557 8.483 0.809 8.76 L 8.225 16.918 C 8.539 17.264 8.835 17.589 9.112 17.82 C 9.21 17.902 9.317 17.982 9.435 18.053 L 9.435 7.801 L 0.031 7.801 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.666 3.100)\"/><path d=\"M 11.235 18.053 C 11.352 17.982 11.459 17.902 11.557 17.82 C 11.834 17.589 12.13 17.264 12.444 16.918 L 19.86 8.76 C 20.113 8.483 20.355 8.216 20.529 7.968 C 20.567 7.915 20.603 7.859 20.638 7.801 L 11.235 7.801 L 11.235 18.053 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.666 3.100)\"/><path d=\"M 20.669 6.001 C 20.639 5.946 20.607 5.893 20.575 5.842 C 20.412 5.587 20.181 5.31 19.941 5.022 L 16.626 1.044 L 16.566 0.972 C 16.546 0.948 16.526 0.924 16.506 0.9 L 12.256 6.001 L 20.669 6.001 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.666 3.100)\"/><path d=\"M 14.907 0.007 C 14.763 -0.001 14.623 0 14.492 0 L 14.398 0.001 L 6.271 0.001 L 6.177 0 C 6.047 0 5.906 -0.001 5.762 0.007 L 10.335 5.494 L 14.907 0.007 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.666 3.100)\"/>"
    },
    "IconNormalDislikeNameDislikeFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.85 19.55 C 10.821 19.55 11.697 18.964 12.066 18.065 L 14.955 11.05 L 18.075 11.05 C 18.195 11.05 18.333 11.05 18.454 11.04 C 18.593 11.029 18.787 11 18.988 10.897 C 19.251 10.763 19.466 10.549 19.6 10.286 C 19.703 10.084 19.731 9.891 19.743 9.752 C 19.753 9.631 19.753 9.492 19.752 9.372 L 19.752 1.678 C 19.753 1.558 19.753 1.419 19.743 1.298 C 19.731 1.159 19.703 0.966 19.6 0.764 C 19.466 0.501 19.251 0.287 18.988 0.153 C 18.787 0.05 18.593 0.021 18.454 0.01 C 18.333 0 18.195 0 18.075 0 L 5.028 0 C 4.575 0 4.185 0 3.861 0.024 C 3.519 0.05 3.186 0.107 2.859 0.254 C 2.36 0.477 1.934 0.837 1.631 1.292 C 1.432 1.591 1.322 1.91 1.239 2.243 C 1.162 2.558 1.097 2.942 1.022 3.39 L 0.239 8.06 C 0.136 8.669 0.05 9.182 0.016 9.605 C -0.019 10.044 -0.007 10.48 0.151 10.908 C 0.387 11.544 0.838 12.077 1.427 12.415 C 1.822 12.642 2.25 12.725 2.689 12.763 C 3.112 12.8 3.632 12.8 4.25 12.8 L 7.453 12.8 L 7.453 17.153 C 7.453 18.477 8.526 19.55 9.85 19.55 Z M 10.402 17.382 C 10.31 17.605 10.092 17.751 9.85 17.751 C 9.52 17.751 9.253 17.484 9.253 17.154 L 9.253 11.901 C 9.253 11.404 8.85 11.001 8.353 11.001 L 3.816 11.001 C 3.373 11.001 3.08 11.001 2.855 10.988 C 2.634 10.975 2.542 10.953 2.496 10.936 C 2.128 10.803 1.859 10.484 1.789 10.1 C 1.78 10.051 1.772 9.957 1.796 9.737 C 1.821 9.513 1.869 9.224 1.942 8.787 L 2.848 3.387 C 2.964 2.698 3 2.538 3.053 2.426 C 3.189 2.143 3.439 1.932 3.74 1.845 C 3.859 1.81 4.023 1.801 4.722 1.801 L 13.453 1.801 L 13.453 9.974 L 10.402 17.382 Z M 15.253 9.251 L 17.953 9.251 L 17.953 1.801 L 15.253 1.801 L 15.253 9.251 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.150 2.100)\"/>"
    },
    "IconNormalDislikeNameDislikeFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.066 18.065 C 11.697 18.964 10.821 19.55 9.85 19.55 C 8.526 19.55 7.453 18.477 7.453 17.153 L 7.453 12.8 L 4.25 12.8 C 3.632 12.8 3.112 12.8 2.689 12.763 C 2.25 12.725 1.822 12.642 1.427 12.415 C 0.838 12.077 0.387 11.544 0.151 10.908 C -0.007 10.48 -0.019 10.044 0.016 9.605 C 0.05 9.182 0.136 8.669 0.239 8.06 L 1.022 3.39 C 1.097 2.942 1.162 2.558 1.239 2.243 C 1.322 1.91 1.432 1.591 1.631 1.292 C 1.934 0.837 2.36 0.477 2.859 0.254 C 3.186 0.107 3.519 0.05 3.861 0.024 C 4.185 0 4.575 0 5.028 0 L 14.952 0 L 14.952 11.057 L 12.066 18.065 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.150 2.099)\"/><path d=\"M 16.752 11.05 L 18.075 11.05 C 18.195 11.05 18.333 11.05 18.454 11.04 C 18.593 11.029 18.787 11 18.988 10.897 C 19.251 10.763 19.466 10.549 19.6 10.286 C 19.703 10.084 19.731 9.891 19.743 9.752 C 19.753 9.631 19.752 9.492 19.752 9.372 L 19.752 1.678 C 19.752 1.558 19.753 1.419 19.743 1.298 C 19.731 1.159 19.703 0.966 19.6 0.764 C 19.466 0.501 19.251 0.287 18.988 0.153 C 18.787 0.05 18.593 0.021 18.454 0.01 C 18.333 0 18.195 0 18.075 0 L 16.752 0 L 16.752 11.05 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.150 2.099)\"/>"
    },
    "IconNormalDocument2NameDocumentFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.429 0.053 C 9.206 -0.001 8.979 0 8.787 0 L 8.737 0 L 4.065 0 C 3.535 0 3.084 0 2.713 0.03 C 2.324 0.062 1.945 0.132 1.583 0.316 C 1.038 0.594 0.594 1.038 0.316 1.584 C 0.132 1.946 0.062 2.324 0.03 2.713 C 0 3.084 0 3.535 0 4.065 L 0 15.736 C 0 16.265 0 16.717 0.03 17.087 C 0.062 17.476 0.132 17.855 0.316 18.217 C 0.594 18.762 1.038 19.206 1.583 19.484 C 1.945 19.668 2.324 19.738 2.713 19.77 C 3.083 19.8 3.535 19.8 4.064 19.8 L 12.235 19.8 C 12.765 19.8 13.216 19.8 13.587 19.77 C 13.976 19.738 14.355 19.668 14.716 19.484 C 15.262 19.206 15.706 18.762 15.984 18.217 C 16.168 17.855 16.238 17.476 16.27 17.087 C 16.3 16.717 16.3 16.265 16.3 15.736 L 16.3 7.562 L 16.3 7.512 C 16.3 7.32 16.301 7.093 16.247 6.87 C 16.201 6.676 16.124 6.491 16.02 6.321 C 15.9 6.126 15.739 5.965 15.603 5.83 L 15.568 5.795 L 10.505 0.732 L 10.469 0.697 C 10.334 0.561 10.174 0.4 9.978 0.28 C 9.808 0.176 9.623 0.099 9.429 0.053 Z M 8.75 1.8 C 8.746 1.8 8.742 1.8 8.737 1.8 L 4.1 1.8 C 3.525 1.8 3.148 1.801 2.86 1.825 C 2.582 1.847 2.466 1.887 2.401 1.92 C 2.194 2.026 2.025 2.194 1.92 2.401 C 1.886 2.467 1.847 2.582 1.824 2.86 C 1.801 3.148 1.8 3.525 1.8 4.1 L 1.8 15.7 C 1.8 16.275 1.801 16.652 1.824 16.941 C 1.847 17.219 1.886 17.334 1.92 17.4 C 2.025 17.607 2.194 17.775 2.401 17.881 C 2.466 17.914 2.582 17.953 2.86 17.976 C 3.148 18 3.525 18 4.1 18 L 12.2 18 C 12.775 18 13.152 18 13.44 17.976 C 13.718 17.953 13.833 17.914 13.899 17.881 C 14.106 17.775 14.275 17.607 14.38 17.4 C 14.414 17.334 14.453 17.219 14.476 16.941 C 14.499 16.652 14.5 16.275 14.5 15.7 L 14.5 7.8 L 11.221 7.8 C 10.966 7.8 10.724 7.8 10.52 7.783 C 10.298 7.765 10.043 7.723 9.788 7.593 C 9.43 7.411 9.14 7.12 8.957 6.763 C 8.827 6.508 8.785 6.253 8.767 6.03 C 8.75 5.826 8.75 5.584 8.75 5.33 L 8.75 1.8 Z M 13.227 6 L 10.55 3.323 L 10.55 5.9 C 10.55 5.955 10.595 6 10.65 6 L 13.227 6 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/>"
    },
    "IconNormalDocument2NameDocumentFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.8 0 C 8.796 0 8.792 0 8.787 0 L 8.737 0 L 4.065 0 C 3.535 0 3.084 0 2.713 0.03 C 2.324 0.062 1.945 0.132 1.583 0.316 C 1.038 0.594 0.594 1.038 0.316 1.584 C 0.132 1.945 0.062 2.324 0.03 2.713 C 0 3.084 0 3.535 0 4.065 L 0 15.736 C 0 16.265 0 16.717 0.03 17.087 C 0.062 17.476 0.132 17.855 0.316 18.217 C 0.594 18.762 1.038 19.206 1.583 19.484 C 1.945 19.668 2.324 19.738 2.713 19.77 C 3.084 19.8 3.535 19.8 4.065 19.8 L 12.235 19.8 C 12.765 19.8 13.216 19.8 13.587 19.77 C 13.976 19.738 14.355 19.668 14.717 19.484 C 15.262 19.206 15.706 18.762 15.984 18.217 C 16.168 17.855 16.238 17.476 16.27 17.087 C 16.3 16.717 16.3 16.265 16.3 15.736 L 16.3 7.75 L 11.222 7.75 C 10.966 7.75 10.726 7.75 10.524 7.734 C 10.305 7.716 10.057 7.674 9.81 7.548 C 9.462 7.371 9.179 7.088 9.002 6.74 C 8.876 6.493 8.835 6.245 8.817 6.026 C 8.8 5.824 8.8 5.584 8.8 5.329 L 8.8 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/><path d=\"M 10.5 0.728 L 10.505 0.732 L 15.815 6.05 L 10.65 6.05 C 10.568 6.05 10.5 5.983 10.5 5.9 L 10.5 0.728 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/>"
    },
    "IconNormalDocumentPersonNameDocumentPersonFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.947 0 C 0.696 0 0.455 0.1 0.277 0.277 C 0.1 0.455 0 0.696 0 0.947 L 0 19.579 C 0 20.102 0.424 20.526 0.947 20.526 L 16.737 20.526 C 17.26 20.526 17.684 20.102 17.684 19.579 L 17.684 9.158 C 17.684 8.635 17.26 8.211 16.737 8.211 C 16.214 8.211 15.79 8.635 15.79 9.158 L 15.79 18.632 L 14.83 18.632 L 14.83 17.52 C 14.83 16.548 14.317 15.727 13.633 15.125 C 12.963 14.537 12.072 14.099 11.091 13.841 C 10.954 13.78 10.913 13.73 10.907 13.723 C 10.905 13.72 10.905 13.72 10.905 13.719 C 10.904 13.717 10.9 13.702 10.901 13.666 L 10.901 13.642 C 10.901 13.589 10.942 13.454 11.1 13.261 C 11.167 13.178 11.236 13.108 11.289 13.059 C 11.315 13.036 11.335 13.018 11.347 13.008 L 11.357 13 C 11.395 12.971 11.43 12.939 11.462 12.905 C 12.031 12.305 12.581 11.376 12.581 10.333 C 12.581 8.292 10.867 6.632 8.842 6.632 C 6.82 6.632 5.091 8.302 5.091 10.333 C 5.091 11.378 5.618 12.314 6.227 12.923 C 6.253 12.948 6.28 12.973 6.309 12.995 L 6.319 13.004 C 6.331 13.014 6.351 13.031 6.376 13.055 C 6.428 13.104 6.498 13.174 6.565 13.258 C 6.717 13.446 6.767 13.585 6.77 13.652 C 6.77 13.684 6.765 13.701 6.763 13.707 C 6.761 13.713 6.759 13.717 6.755 13.723 C 6.746 13.735 6.704 13.783 6.576 13.842 C 5.595 14.101 4.705 14.542 4.037 15.131 C 3.356 15.733 2.842 16.553 2.842 17.52 L 2.842 18.632 L 1.895 18.632 L 1.895 1.895 L 12.457 1.895 L 15.963 6.862 C 16.265 7.29 16.856 7.391 17.283 7.09 C 17.711 6.788 17.813 6.197 17.511 5.769 L 13.721 0.401 C 13.544 0.15 13.255 0 12.947 0 L 0.947 0 Z M 6.985 10.333 C 6.985 9.382 7.833 8.526 8.842 8.526 C 9.849 8.526 10.686 9.367 10.686 10.333 C 10.686 10.715 10.469 11.181 10.125 11.56 C 10.093 11.587 10.052 11.623 10.004 11.667 C 9.903 11.761 9.767 11.896 9.629 12.066 C 9.377 12.376 9.011 12.93 9.006 13.63 C 8.998 14.071 9.118 14.5 9.398 14.868 C 9.67 15.227 10.043 15.464 10.436 15.621 C 10.474 15.636 10.514 15.649 10.555 15.659 C 11.34 15.858 11.968 16.185 12.382 16.548 C 12.796 16.913 12.935 17.254 12.935 17.52 L 12.935 18.619 L 4.737 18.619 L 4.737 17.52 C 4.737 17.262 4.874 16.92 5.291 16.552 C 5.705 16.187 6.334 15.858 7.117 15.659 C 7.16 15.648 7.202 15.635 7.243 15.618 C 7.631 15.459 7.996 15.222 8.264 14.868 C 8.541 14.504 8.665 14.08 8.665 13.642 L 8.665 13.626 C 8.654 12.932 8.291 12.38 8.04 12.069 C 7.904 11.9 7.77 11.765 7.67 11.671 C 7.62 11.624 7.577 11.586 7.544 11.558 L 7.538 11.553 C 7.203 11.205 6.985 10.741 6.985 10.333 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.158 1.421)\"/>"
    },
    "IconNormalDocumentPersonNameDocumentPersonFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.277 0.277 C 0.455 0.1 0.696 0 0.947 0 L 12.947 0 C 13.255 0 13.544 0.15 13.721 0.401 L 17.511 5.769 C 17.624 5.929 17.684 6.12 17.684 6.316 L 17.684 19.579 C 17.684 20.102 17.26 20.526 16.737 20.526 L 14.293 20.526 L 14.293 18.948 C 14.293 17.611 12.887 16.437 10.949 15.946 C 10.335 15.701 10.035 15.305 10.049 14.759 C 10.049 13.941 10.936 13.258 10.936 13.258 C 11.441 12.726 11.864 11.962 11.864 11.185 C 11.864 9.561 10.485 8.211 8.848 8.211 C 7.21 8.211 5.818 9.575 5.818 11.185 C 5.818 11.976 6.228 12.74 6.746 13.258 C 6.746 13.258 7.62 13.941 7.633 14.759 C 7.633 15.305 7.333 15.701 6.733 15.946 C 4.795 16.437 3.389 17.624 3.389 18.948 L 3.389 20.526 L 0.947 20.526 C 0.424 20.526 0 20.102 0 19.579 L 0 0.947 C 0 0.696 0.1 0.455 0.277 0.277 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 1.421)\"/>"
    },
    "IconNormalDocumentTextNameDocumentTextFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4 11.4 C 4 10.902 4.403 10.5 4.9 10.5 L 8.9 10.5 C 9.397 10.5 9.8 10.902 9.8 11.4 C 9.8 11.897 9.397 12.3 8.9 12.3 L 4.9 12.3 C 4.403 12.3 4 11.897 4 11.4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/><path d=\"M 4 14.9 C 4 14.403 4.403 14 4.9 14 L 8.9 14 C 9.397 14 9.8 14.403 9.8 14.9 C 9.8 15.397 9.397 15.8 8.9 15.8 L 4.9 15.8 C 4.403 15.8 4 15.397 4 14.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/><path d=\"M 9.429 0.053 C 9.206 -0.001 8.979 0 8.787 0 L 8.737 0 L 4.065 0 C 3.535 0 3.084 0 2.713 0.03 C 2.324 0.062 1.945 0.132 1.583 0.316 C 1.038 0.594 0.594 1.038 0.316 1.584 C 0.132 1.946 0.062 2.324 0.03 2.713 C 0 3.084 0 3.535 0 4.065 L 0 15.736 C 0 16.265 0 16.717 0.03 17.087 C 0.062 17.476 0.132 17.855 0.316 18.217 C 0.594 18.762 1.038 19.206 1.583 19.484 C 1.945 19.668 2.324 19.738 2.713 19.77 C 3.084 19.8 3.535 19.8 4.065 19.8 L 12.235 19.8 C 12.765 19.8 13.216 19.8 13.587 19.77 C 13.976 19.738 14.355 19.668 14.717 19.484 C 15.262 19.206 15.706 18.762 15.984 18.217 C 16.168 17.855 16.238 17.476 16.27 17.087 C 16.3 16.717 16.3 16.265 16.3 15.736 L 16.3 7.562 L 16.3 7.512 C 16.3 7.32 16.301 7.093 16.247 6.87 C 16.201 6.676 16.124 6.491 16.02 6.321 C 15.9 6.126 15.739 5.965 15.603 5.83 L 15.568 5.795 L 10.505 0.732 L 10.469 0.697 C 10.334 0.561 10.174 0.4 9.978 0.28 C 9.808 0.176 9.623 0.099 9.429 0.053 Z M 8.75 1.8 C 8.746 1.8 8.742 1.8 8.737 1.8 L 4.1 1.8 C 3.525 1.8 3.148 1.801 2.86 1.825 C 2.582 1.847 2.466 1.887 2.401 1.92 C 2.194 2.026 2.025 2.194 1.92 2.401 C 1.886 2.467 1.847 2.582 1.824 2.86 C 1.801 3.148 1.8 3.525 1.8 4.1 L 1.8 15.7 C 1.8 16.275 1.801 16.652 1.824 16.941 C 1.847 17.219 1.886 17.334 1.92 17.4 C 2.025 17.607 2.194 17.775 2.401 17.881 C 2.466 17.914 2.582 17.953 2.86 17.976 C 3.148 18 3.525 18 4.1 18 L 12.2 18 C 12.775 18 13.152 18 13.44 17.976 C 13.718 17.953 13.833 17.914 13.899 17.881 C 14.106 17.775 14.275 17.607 14.38 17.4 C 14.414 17.334 14.453 17.219 14.476 16.941 C 14.499 16.652 14.5 16.275 14.5 15.7 L 14.5 7.8 L 11.221 7.8 C 10.966 7.8 10.724 7.8 10.52 7.783 C 10.298 7.765 10.043 7.723 9.788 7.593 C 9.43 7.411 9.14 7.12 8.957 6.763 C 8.828 6.508 8.785 6.253 8.767 6.03 C 8.75 5.826 8.75 5.584 8.75 5.33 L 8.75 1.8 Z M 13.227 6 L 10.55 3.323 L 10.55 5.9 C 10.55 5.955 10.595 6 10.65 6 L 13.227 6 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/>"
    },
    "IconNormalDocumentTextNameDocumentTextFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.8 0 L 8.8 5.329 C 8.8 5.584 8.8 5.824 8.817 6.026 C 8.835 6.245 8.876 6.493 9.002 6.74 C 9.179 7.088 9.462 7.371 9.81 7.548 C 10.057 7.674 10.305 7.716 10.524 7.734 C 10.726 7.75 10.966 7.75 11.222 7.75 L 16.3 7.75 L 16.3 15.736 C 16.3 16.265 16.3 16.717 16.27 17.087 C 16.238 17.476 16.168 17.855 15.984 18.217 C 15.706 18.762 15.262 19.206 14.717 19.484 C 14.355 19.668 13.976 19.738 13.587 19.77 C 13.216 19.8 12.765 19.8 12.235 19.8 L 4.065 19.8 C 3.535 19.8 3.084 19.8 2.713 19.77 C 2.324 19.738 1.945 19.668 1.583 19.484 C 1.038 19.206 0.594 18.762 0.316 18.217 C 0.132 17.855 0.062 17.476 0.03 17.087 C 0 16.717 0 16.265 0 15.736 L 0 4.065 C 0 3.535 0 3.084 0.03 2.713 C 0.062 2.324 0.132 1.945 0.316 1.584 C 0.594 1.038 1.038 0.594 1.583 0.316 C 1.945 0.132 2.324 0.062 2.713 0.03 C 3.084 0 3.535 0 4.065 0 L 8.737 0 L 8.8 0 Z M 3.25 11.898 C 3.25 11.401 3.653 10.998 4.15 10.998 L 8.15 10.998 C 8.647 10.998 9.05 11.401 9.05 11.898 C 9.05 12.395 8.647 12.798 8.15 12.798 L 4.15 12.798 C 3.653 12.798 3.25 12.395 3.25 11.898 Z M 3.25 15.649 C 3.25 15.152 3.653 14.749 4.15 14.749 L 8.15 14.749 C 8.647 14.749 9.05 15.152 9.05 15.649 C 9.05 16.146 8.647 16.549 8.15 16.549 L 4.15 16.549 C 3.653 16.549 3.25 16.146 3.25 15.649 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/><path d=\"M 10.5 0.728 L 10.5 5.9 C 10.5 5.983 10.568 6.05 10.65 6.05 L 15.815 6.05 L 10.5 0.728 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.850 2.100)\"/>"
    },
    "IconNormalDownloadNameDownload": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16.737 11.368 C 17.217 11.368 17.613 11.725 17.676 12.187 L 17.684 12.316 L 17.684 17.975 C 17.684 18.454 17.329 18.85 16.867 18.914 L 16.738 18.922 L 0.949 18.947 C 0.469 18.948 0.072 18.592 0.009 18.129 L 0 18 L 0 12.341 C 0 11.818 0.424 11.393 0.947 11.393 C 1.427 11.393 1.823 11.75 1.886 12.212 L 1.895 12.341 L 1.895 17.051 L 15.79 17.029 L 15.79 12.316 C 15.79 11.836 16.146 11.44 16.608 11.377 L 16.737 11.368 Z M 8.842 0 C 9.322 0 9.718 0.356 9.781 0.819 L 9.79 0.947 L 9.79 11.607 L 12.593 8.804 C 12.929 8.468 13.456 8.437 13.827 8.712 L 13.933 8.804 C 14.269 9.14 14.3 9.666 14.025 10.037 L 13.933 10.143 L 9.512 14.568 C 9.478 14.601 9.442 14.632 9.404 14.66 L 9.512 14.567 C 9.466 14.613 9.417 14.654 9.364 14.688 C 9.341 14.703 9.318 14.718 9.293 14.731 C 9.275 14.741 9.256 14.751 9.236 14.759 C 9.213 14.77 9.189 14.78 9.165 14.789 C 9.146 14.796 9.127 14.802 9.108 14.807 C 9.082 14.815 9.054 14.822 9.027 14.827 C 9.009 14.83 8.992 14.833 8.974 14.836 C 8.931 14.842 8.887 14.845 8.842 14.845 C 8.825 14.845 8.816 14.845 8.806 14.844 L 8.842 14.845 C 8.794 14.845 8.746 14.841 8.699 14.834 C 8.686 14.832 8.671 14.83 8.657 14.827 C 8.624 14.82 8.592 14.812 8.56 14.802 C 8.548 14.798 8.535 14.794 8.522 14.79 C 8.494 14.779 8.466 14.768 8.439 14.755 C 8.42 14.746 8.401 14.737 8.383 14.727 C 8.352 14.709 8.322 14.69 8.292 14.669 C 8.288 14.666 8.283 14.663 8.279 14.659 C 8.24 14.63 8.205 14.6 8.172 14.568 L 3.745 10.144 C 3.375 9.774 3.375 9.174 3.745 8.804 C 4.081 8.468 4.607 8.437 4.978 8.712 L 5.085 8.804 L 7.895 11.612 L 7.895 0.947 C 7.895 0.424 8.319 0 8.842 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 3.158)\"/>"
    },
    "IconNormalExternalLinkNameExternalLink": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.79 0.947 C 9.79 0.424 9.365 0 8.842 0 L 0.947 0 L 0.819 0.009 C 0.356 0.071 0 0.468 0 0.947 L 0 16.737 L 0.009 16.865 C 0.071 17.328 0.468 17.684 0.947 17.684 L 16.737 17.684 L 16.865 17.676 C 17.328 17.613 17.684 17.216 17.684 16.737 L 17.684 8.842 L 17.676 8.714 C 17.613 8.251 17.217 7.895 16.737 7.895 L 16.608 7.903 C 16.146 7.966 15.79 8.362 15.79 8.842 L 15.79 15.788 L 1.895 15.788 L 1.895 1.893 L 8.842 1.895 L 8.971 1.886 C 9.433 1.823 9.79 1.427 9.79 0.947 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 3.158)\"/><path d=\"M 16.737 0 C 17.217 0 17.613 0.356 17.676 0.819 L 17.684 0.947 L 17.684 5.368 C 17.684 5.892 17.26 6.316 16.737 6.316 C 16.257 6.316 15.861 5.959 15.798 5.497 L 15.79 5.368 L 15.79 3.235 L 6.67 12.354 C 6.3 12.724 5.7 12.724 5.33 12.354 C 4.994 12.018 4.963 11.491 5.238 11.121 L 5.33 11.014 L 14.45 1.895 L 12.316 1.895 C 11.836 1.895 11.44 1.538 11.377 1.076 L 11.368 0.947 C 11.368 0.468 11.725 0.071 12.187 0.009 L 12.316 0 L 16.737 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 3.158)\"/>"
    },
    "IconNormalEyeNameEyeFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.213 3.5 C 8.059 3.5 6.313 5.246 6.313 7.4 C 6.313 9.554 8.059 11.3 10.213 11.3 C 12.367 11.3 14.113 9.554 14.113 7.4 C 14.113 5.246 12.367 3.5 10.213 3.5 Z M 8.113 7.4 C 8.113 6.24 9.054 5.3 10.213 5.3 C 11.373 5.3 12.313 6.24 12.313 7.4 C 12.313 8.56 11.373 9.5 10.213 9.5 C 9.054 9.5 8.113 8.56 8.113 7.4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.787 4.599)\"/><path d=\"M 10.213 14.799 C 14.77 14.799 18.673 12.004 20.302 8.035 C 20.469 7.628 20.469 7.171 20.302 6.765 C 18.673 2.795 14.77 0 10.213 0 C 5.657 0 1.754 2.795 0.125 6.765 C -0.042 7.171 -0.042 7.628 0.125 8.035 C 1.754 12.004 5.657 14.799 10.213 14.799 Z M 1.811 7.4 C 3.182 4.111 6.428 1.8 10.213 1.8 C 13.999 1.8 17.244 4.111 18.616 7.4 C 17.244 10.688 13.999 12.999 10.213 12.999 C 6.428 12.999 3.182 10.688 1.811 7.4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.787 4.599)\"/>"
    },
    "IconNormalEyeNameEyeFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.108 7.401 C 8.108 6.241 9.048 5.301 10.208 5.301 C 11.367 5.301 12.308 6.241 12.308 7.401 C 12.308 8.56 11.367 9.501 10.208 9.501 C 9.048 9.501 8.108 8.56 8.108 7.401 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.792 4.599)\"/><path d=\"M 20.302 8.035 C 20.469 7.628 20.469 7.171 20.302 6.765 C 18.673 2.795 14.77 0 10.213 0 C 5.657 0 1.754 2.795 0.125 6.765 C -0.042 7.171 -0.042 7.628 0.125 8.035 C 1.754 12.004 5.657 14.799 10.213 14.799 C 14.77 14.799 18.673 12.004 20.302 8.035 Z M 10.208 3.501 C 8.054 3.501 6.308 5.247 6.308 7.401 C 6.308 9.554 8.054 11.301 10.208 11.301 C 12.362 11.301 14.108 9.554 14.108 7.401 C 14.108 5.247 12.362 3.501 10.208 3.501 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.792 4.599)\"/>"
    },
    "IconNormalEyeSlashNameEyeSlashFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.027 8.946 C 14.08 8.689 14.108 8.423 14.108 8.151 C 14.108 5.997 12.362 4.251 10.208 4.251 C 9.935 4.251 9.669 4.278 9.412 4.332 L 14.027 8.946 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.792 3.850)\"/><path d=\"M 1.571 0.264 C 1.923 -0.088 2.493 -0.088 2.844 0.264 L 4.78 2.199 C 6.379 1.278 8.235 0.75 10.213 0.75 C 14.77 0.75 18.673 3.546 20.302 7.515 C 20.469 7.922 20.469 8.378 20.302 8.785 C 19.476 10.796 18.067 12.506 16.284 13.704 L 17.844 15.264 C 18.196 15.615 18.196 16.185 17.844 16.536 C 17.493 16.888 16.923 16.888 16.571 16.536 L 14.646 14.611 C 13.292 15.214 11.792 15.55 10.213 15.55 C 5.657 15.55 1.754 12.754 0.125 8.785 C -0.042 8.378 -0.042 7.922 0.125 7.515 C 0.812 5.842 1.903 4.377 3.277 3.242 L 1.571 1.536 C 1.22 1.185 1.22 0.615 1.571 0.264 Z M 4.557 4.522 C 3.36 5.473 2.408 6.719 1.811 8.15 C 3.182 11.438 6.428 13.75 10.213 13.75 C 11.283 13.75 12.309 13.565 13.262 13.227 L 11.763 11.728 C 11.286 11.935 10.761 12.051 10.208 12.051 C 8.054 12.051 6.308 10.304 6.308 8.151 C 6.308 7.598 6.423 7.072 6.63 6.595 L 4.557 4.522 Z M 14.982 12.402 C 16.597 11.406 17.878 9.919 18.616 8.15 C 17.244 4.862 13.999 2.55 10.213 2.55 C 8.736 2.55 7.341 2.902 6.108 3.527 L 14.982 12.402 Z M 8.109 8.074 L 10.284 10.249 C 10.259 10.25 10.233 10.251 10.208 10.251 C 9.048 10.251 8.108 9.31 8.108 8.151 C 8.108 8.125 8.108 8.099 8.109 8.074 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.792 3.850)\"/>"
    },
    "IconNormalEyeSlashNameEyeSlashFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.844 0.264 C 2.493 -0.088 1.923 -0.088 1.571 0.264 C 1.22 0.615 1.22 1.185 1.571 1.536 L 3.277 3.242 C 1.903 4.376 0.812 5.841 0.125 7.515 C -0.042 7.921 -0.042 8.378 0.125 8.784 C 1.754 12.754 5.657 15.549 10.213 15.549 C 11.792 15.549 13.291 15.214 14.645 14.61 L 16.571 16.536 C 16.923 16.888 17.493 16.888 17.844 16.536 C 18.196 16.185 18.196 15.615 17.844 15.264 L 2.844 0.264 Z M 11.763 11.728 L 10.284 10.249 C 10.259 10.25 10.233 10.25 10.208 10.25 C 9.048 10.25 8.108 9.31 8.108 8.15 C 8.108 8.125 8.108 8.099 8.109 8.074 L 6.63 6.595 C 6.423 7.072 6.308 7.598 6.308 8.15 C 6.308 10.304 8.054 12.05 10.208 12.05 C 10.76 12.05 11.286 11.935 11.763 11.728 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.792 3.850)\"/><path d=\"M 14.027 8.946 L 17.676 12.594 C 18.803 11.535 19.705 10.239 20.302 8.784 C 20.469 8.378 20.469 7.921 20.302 7.515 C 18.673 3.545 14.77 0.75 10.213 0.75 C 8.904 0.75 7.648 0.981 6.485 1.404 L 9.413 4.331 C 9.669 4.278 9.935 4.25 10.208 4.25 C 12.362 4.25 14.108 5.996 14.108 8.15 C 14.108 8.423 14.08 8.689 14.027 8.946 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.792 3.850)\"/>"
    },
    "IconNormalFaceSmileNameFaceSmileFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.9 7.9 C 7.9 8.452 7.452 8.9 6.9 8.9 C 6.348 8.9 5.9 8.452 5.9 7.9 C 5.9 7.348 6.348 6.9 6.9 6.9 C 7.452 6.9 7.9 7.348 7.9 7.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 13.9 7.9 C 13.9 8.452 13.452 8.9 12.9 8.9 C 12.348 8.9 11.9 8.452 11.9 7.9 C 11.9 7.348 12.348 6.9 12.9 6.9 C 13.452 6.9 13.9 7.348 13.9 7.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 6.448 10.922 C 6.878 10.672 7.429 10.818 7.678 11.248 C 8.134 12.033 8.985 12.56 9.95 12.56 C 10.915 12.56 11.766 12.033 12.222 11.248 C 12.471 10.818 13.022 10.672 13.452 10.922 C 13.882 11.172 14.028 11.722 13.778 12.152 C 13.014 13.467 11.585 14.36 9.95 14.36 C 8.315 14.36 6.886 13.467 6.122 12.152 C 5.872 11.722 6.018 11.172 6.448 10.922 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/><path d=\"M 9.9 1.8 C 5.426 1.8 1.8 5.426 1.8 9.9 C 1.8 14.374 5.426 18 9.9 18 C 14.374 18 18 14.374 18 9.9 C 18 5.426 14.374 1.8 9.9 1.8 Z M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalFaceSmileNameFaceSmileFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 6.9 8.9 C 7.452 8.9 7.9 8.452 7.9 7.9 C 7.9 7.348 7.452 6.9 6.9 6.9 C 6.348 6.9 5.9 7.348 5.9 7.9 C 5.9 8.452 6.348 8.9 6.9 8.9 Z M 12.9 8.9 C 13.452 8.9 13.9 8.452 13.9 7.9 C 13.9 7.348 13.452 6.9 12.9 6.9 C 12.348 6.9 11.9 7.348 11.9 7.9 C 11.9 8.452 12.348 8.9 12.9 8.9 Z M 6.448 10.922 C 6.878 10.672 7.429 10.818 7.678 11.248 C 8.134 12.033 8.985 12.56 9.95 12.56 C 10.915 12.56 11.766 12.033 12.222 11.248 C 12.471 10.818 13.022 10.672 13.452 10.922 C 13.882 11.172 14.028 11.722 13.778 12.152 C 13.014 13.467 11.585 14.36 9.95 14.36 C 8.315 14.36 6.886 13.467 6.122 12.152 C 5.872 11.722 6.018 11.172 6.448 10.922 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalFilterNameFilterFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 19.265 0 C 19.788 0 20.212 0.424 20.212 0.947 C 20.212 1.427 19.856 1.823 19.393 1.886 L 19.265 1.895 L 2.797 1.894 L 8.083 9.239 C 8.17 9.36 8.227 9.499 8.25 9.645 L 8.261 9.792 L 8.261 15.273 L 11.945 17.561 L 11.946 9.792 C 11.946 9.643 11.981 9.497 12.048 9.365 L 12.125 9.239 L 15.513 4.535 C 15.819 4.111 16.411 4.014 16.835 4.32 C 17.221 4.598 17.336 5.113 17.124 5.523 L 17.05 5.643 L 13.84 10.098 L 13.841 19.266 C 13.841 19.965 13.118 20.408 12.507 20.131 L 12.394 20.071 L 6.814 16.605 C 6.576 16.456 6.417 16.212 6.377 15.939 L 6.367 15.8 L 6.367 10.098 L 0.18 1.501 C -0.244 0.911 0.127 0.102 0.816 0.009 L 0.949 0 L 19.265 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.891 1.892)\"/>"
    },
    "IconNormalFilterNameFilterFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.949 0 L 0.816 0.009 C 0.127 0.102 -0.244 0.911 0.18 1.501 L 6.367 10.098 L 6.367 15.8 C 6.367 16.127 6.536 16.432 6.814 16.605 L 12.394 20.071 L 12.507 20.131 C 13.118 20.408 13.841 19.965 13.841 19.266 L 13.84 10.098 L 20.034 1.501 C 20.485 0.874 20.037 0 19.265 0 L 0.949 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.891 1.892)\"/>"
    },
    "IconNormalFireNameFireFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.65 13.701 C 5.65 15.601 7.2 17.101 9.15 17.101 C 11.1 17.101 12.65 15.601 12.65 13.701 C 12.65 11.801 11.1 10.301 9.15 8.601 C 7.2 10.301 5.65 11.801 5.65 13.701 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.849 1.399)\"/><path d=\"M 11.415 0.433 C 10.656 -0.266 9.461 -0.093 8.917 0.765 L 5.961 5.421 L 5.261 4.791 C 4.638 4.23 3.638 4.202 3.01 4.864 C 1.111 6.864 0 9.476 0 12.202 C 0 14.732 0.939 16.946 2.583 18.526 C 4.224 20.103 6.517 21.002 9.15 21.002 C 14.479 21.002 18.3 17.117 18.3 12.202 C 18.3 8.039 15.641 4.322 11.415 0.433 Z M 6.91 7.284 L 10.336 1.887 C 14.409 5.664 16.5 8.885 16.5 12.202 C 16.5 16.086 13.521 19.202 9.15 19.202 C 6.933 19.202 5.101 18.45 3.83 17.228 C 2.561 16.008 1.8 14.272 1.8 12.202 C 1.8 10.032 2.661 7.914 4.185 6.244 L 5.548 7.471 C 5.745 7.648 6.01 7.729 6.272 7.693 C 6.535 7.657 6.768 7.508 6.91 7.284 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.849 1.399)\"/>"
    },
    "IconNormalFireNameFireFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.759 0.88 C 9.384 -0.104 10.76 -0.31 11.634 0.503 C 15.73 4.317 18.3 7.977 18.3 12.069 C 18.3 16.985 14.479 20.869 9.15 20.869 C 6.517 20.869 4.224 19.971 2.583 18.393 C 0.939 16.813 0 14.599 0 12.069 C 0 9.344 1.111 6.732 3.01 4.731 C 3.638 4.069 4.638 4.098 5.261 4.658 L 5.961 5.288 L 8.759 0.88 Z M 5.65 14.069 C 5.65 15.969 7.2 17.469 9.15 17.469 C 11.1 17.469 12.65 15.969 12.65 14.069 C 12.65 12.169 11.1 10.669 9.15 8.969 C 7.2 10.669 5.65 12.169 5.65 14.069 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.849 1.532)\"/>"
    },
    "IconNormalFlagNameFlagFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.8 14.44 L 1.928 14.398 C 4.124 13.666 6.517 13.798 8.619 14.768 L 8.995 14.942 C 10.798 15.774 12.793 16.098 14.767 15.879 L 15.165 15.834 C 16.381 15.699 17.3 14.672 17.3 13.449 L 17.3 2.792 C 17.3 2.536 17.191 2.292 17 2.121 C 16.81 1.95 16.555 1.869 16.301 1.897 L 14.568 2.09 C 12.921 2.273 11.254 2.002 9.75 1.308 L 8.737 0.841 C 6.628 -0.133 4.227 -0.266 2.023 0.469 C 0.815 0.871 0 2.002 0 3.275 L 0 13.77 C 0 13.784 0 13.798 0 13.812 L 0 19.292 C 0 19.789 0.403 20.192 0.9 20.192 C 1.397 20.192 1.8 19.789 1.8 19.292 L 1.8 14.44 Z M 7.983 2.475 C 6.29 1.693 4.362 1.586 2.592 2.176 C 2.119 2.334 1.8 2.776 1.8 3.275 L 1.8 12.553 C 4.308 11.834 6.996 12.037 9.373 13.134 L 9.75 13.308 C 11.254 14.002 12.921 14.273 14.568 14.09 L 14.967 14.045 C 15.27 14.012 15.5 13.755 15.5 13.449 L 15.5 3.797 L 14.767 3.879 C 12.793 4.098 10.798 3.774 8.995 2.942 L 7.983 2.475 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.350 1.708)\"/>"
    },
    "IconNormalFlagNameFlagFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.8 14.44 L 1.928 14.398 C 4.124 13.666 6.517 13.798 8.619 14.768 L 8.995 14.942 C 10.798 15.774 12.793 16.098 14.767 15.879 L 15.165 15.834 C 16.381 15.699 17.3 14.672 17.3 13.449 L 17.3 2.792 C 17.3 2.536 17.191 2.292 17 2.121 C 16.81 1.95 16.555 1.869 16.301 1.897 L 14.568 2.09 C 12.921 2.273 11.254 2.002 9.75 1.308 L 8.737 0.841 C 6.628 -0.133 4.227 -0.266 2.023 0.469 C 0.815 0.871 0 2.002 0 3.275 L 0 13.77 C 0 13.784 0 13.798 0 13.812 L 0 19.292 C 0 19.789 0.403 20.192 0.9 20.192 C 1.397 20.192 1.8 19.789 1.8 19.292 L 1.8 14.44 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.350 1.708)\"/>"
    },
    "IconNormalFolderJobNameFolderJobFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.15 6.7 C 6.349 6.7 5.7 7.349 5.7 8.15 C 5.7 8.951 6.349 9.6 7.15 9.6 C 7.95 9.6 8.6 8.951 8.6 8.15 C 8.6 7.349 7.95 6.7 7.15 6.7 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/><path d=\"M 7.15 10.452 C 6.325 10.452 5.546 10.648 4.959 11.032 C 4.363 11.421 3.95 12.02 3.95 12.779 C 3.95 13.095 4.206 13.352 4.523 13.352 L 9.776 13.352 C 10.093 13.352 10.35 13.095 10.35 12.779 C 10.35 12.02 9.936 11.421 9.34 11.032 C 8.753 10.648 7.974 10.452 7.15 10.452 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/><path d=\"M 6.531 0.059 C 6.24 0 5.945 0 5.595 0 L 4.065 0 C 3.535 0 3.084 0 2.713 0.03 C 2.324 0.062 1.945 0.132 1.583 0.316 C 1.038 0.594 0.594 1.038 0.316 1.583 C 0.132 1.945 0.062 2.324 0.03 2.713 C 0 3.084 0 3.535 0 4.065 L 0 13.236 C 0 13.765 0 14.217 0.03 14.587 C 0.062 14.976 0.132 15.355 0.316 15.717 C 0.594 16.262 1.038 16.706 1.583 16.984 C 1.945 17.168 2.324 17.238 2.713 17.27 C 3.083 17.3 3.535 17.3 4.065 17.3 L 15.735 17.3 C 16.265 17.3 16.716 17.3 17.087 17.27 C 17.476 17.238 17.855 17.168 18.216 16.984 C 18.762 16.706 19.206 16.262 19.484 15.717 C 19.668 15.355 19.738 14.976 19.77 14.587 C 19.8 14.217 19.8 13.765 19.8 13.235 L 19.8 6.065 C 19.8 5.535 19.8 5.084 19.77 4.713 C 19.738 4.324 19.668 3.945 19.484 3.583 C 19.206 3.038 18.762 2.594 18.216 2.316 C 17.855 2.132 17.476 2.062 17.087 2.03 C 16.716 2 16.265 2 15.735 2 L 9.465 2 L 8.036 0.856 C 7.763 0.637 7.532 0.453 7.268 0.318 C 7.035 0.199 6.787 0.112 6.531 0.059 Z M 2.56 1.854 C 2.692 1.811 2.885 1.8 3.7 1.8 L 5.668 1.8 C 5.969 1.8 6.036 1.802 6.096 1.81 C 6.244 1.83 6.386 1.88 6.514 1.956 C 6.565 1.987 6.619 2.028 6.855 2.216 L 8.588 3.603 C 8.747 3.73 8.945 3.8 9.15 3.8 L 16.1 3.8 C 16.914 3.8 17.108 3.811 17.24 3.854 C 17.575 3.963 17.837 4.225 17.946 4.56 C 17.989 4.692 18 4.885 18 5.7 L 18 13.6 C 18 14.415 17.989 14.608 17.946 14.74 C 17.837 15.075 17.575 15.337 17.24 15.446 C 17.108 15.489 16.914 15.5 16.1 15.5 L 3.7 15.5 C 2.885 15.5 2.692 15.489 2.56 15.446 C 2.225 15.337 1.963 15.075 1.854 14.74 C 1.811 14.608 1.8 14.415 1.8 13.6 L 1.8 3.7 C 1.8 2.885 1.811 2.692 1.854 2.56 C 1.963 2.225 2.225 1.963 2.56 1.854 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/>"
    },
    "IconNormalFolderJobNameFolderJobFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.595 0 C 5.945 0 6.24 0 6.531 0.059 C 6.787 0.112 7.035 0.199 7.268 0.318 C 7.532 0.453 7.763 0.637 8.036 0.856 L 9.465 2 L 15.735 2 C 16.265 2 16.716 2 17.087 2.03 C 17.476 2.062 17.855 2.132 18.217 2.316 C 18.762 2.594 19.206 3.038 19.484 3.583 C 19.668 3.945 19.738 4.324 19.77 4.713 C 19.8 5.084 19.8 5.535 19.8 6.065 L 19.8 13.235 C 19.8 13.765 19.8 14.217 19.77 14.587 C 19.738 14.976 19.668 15.355 19.484 15.717 C 19.206 16.262 18.762 16.706 18.217 16.984 C 17.855 17.168 17.476 17.238 17.087 17.27 C 16.716 17.3 16.265 17.3 15.735 17.3 L 4.065 17.3 C 3.535 17.3 3.084 17.3 2.713 17.27 C 2.324 17.238 1.945 17.168 1.583 16.984 C 1.038 16.706 0.594 16.262 0.316 15.717 C 0.132 15.355 0.062 14.976 0.03 14.587 C 0 14.217 0 13.765 0 13.235 L 0 4.065 C 0 3.535 0 3.084 0.03 2.713 C 0.062 2.324 0.132 1.945 0.316 1.583 C 0.594 1.038 1.038 0.594 1.583 0.316 C 1.945 0.132 2.324 0.062 2.713 0.03 C 3.084 0 3.535 0 4.065 0 L 5.595 0 Z M 6.65 7.201 C 5.849 7.201 5.2 7.85 5.2 8.651 C 5.2 9.451 5.849 10.101 6.65 10.101 C 7.45 10.101 8.1 9.451 8.1 8.651 C 8.1 7.85 7.45 7.201 6.65 7.201 Z M 6.65 10.953 C 5.825 10.953 5.046 11.148 4.459 11.532 C 3.863 11.922 3.45 12.52 3.45 13.279 C 3.45 13.596 3.706 13.853 4.023 13.853 L 9.276 13.853 C 9.593 13.853 9.85 13.596 9.85 13.279 C 9.85 12.52 9.436 11.922 8.84 11.532 C 8.253 11.148 7.474 10.953 6.65 10.953 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/>"
    },
    "IconNormalFolderNameFolderFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.595 0 C 5.945 0 6.241 0 6.531 0.059 C 6.787 0.112 7.035 0.199 7.268 0.318 C 7.532 0.453 7.763 0.637 8.036 0.856 L 9.466 2 L 15.735 2 C 16.265 2 16.716 2 17.087 2.03 C 17.476 2.062 17.855 2.132 18.217 2.316 C 18.762 2.594 19.206 3.038 19.484 3.583 C 19.668 3.945 19.738 4.324 19.77 4.713 C 19.8 5.084 19.8 5.535 19.8 6.065 L 19.8 13.235 C 19.8 13.765 19.8 14.217 19.77 14.587 C 19.738 14.976 19.668 15.355 19.484 15.717 C 19.206 16.262 18.762 16.706 18.217 16.984 C 17.855 17.168 17.476 17.238 17.087 17.27 C 16.716 17.3 16.265 17.3 15.735 17.3 L 4.065 17.3 C 3.535 17.3 3.084 17.3 2.713 17.27 C 2.324 17.238 1.945 17.168 1.583 16.984 C 1.038 16.706 0.594 16.262 0.316 15.717 C 0.132 15.355 0.062 14.976 0.03 14.587 C 0 14.217 0 13.765 0 13.236 L 0 4.065 C 0 3.535 0 3.084 0.03 2.713 C 0.062 2.324 0.132 1.945 0.316 1.583 C 0.594 1.038 1.038 0.594 1.583 0.316 C 1.945 0.132 2.324 0.062 2.713 0.03 C 3.084 0 3.535 0 4.065 0 L 5.595 0 Z M 3.7 1.8 C 2.885 1.8 2.692 1.811 2.56 1.854 C 2.225 1.963 1.963 2.225 1.854 2.56 C 1.811 2.692 1.8 2.885 1.8 3.7 L 1.8 13.6 C 1.8 14.415 1.811 14.608 1.854 14.74 C 1.963 15.075 2.225 15.337 2.56 15.446 C 2.692 15.489 2.885 15.5 3.7 15.5 L 16.1 15.5 C 16.915 15.5 17.108 15.489 17.24 15.446 C 17.575 15.337 17.837 15.075 17.946 14.74 C 17.989 14.608 18 14.415 18 13.6 L 18 5.7 C 18 4.885 17.989 4.692 17.946 4.56 C 17.837 4.225 17.575 3.963 17.24 3.854 C 17.108 3.811 16.915 3.8 16.1 3.8 L 9.15 3.8 C 8.945 3.8 8.747 3.73 8.588 3.603 L 6.855 2.216 C 6.619 2.028 6.565 1.987 6.514 1.956 C 6.386 1.88 6.244 1.83 6.096 1.81 C 6.037 1.802 5.969 1.8 5.668 1.8 L 3.7 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/>"
    },
    "IconNormalFolderNameFolderFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.531 0.059 C 6.24 0 5.945 0 5.595 0 L 4.065 0 C 3.535 0 3.084 0 2.713 0.03 C 2.324 0.062 1.945 0.132 1.583 0.316 C 1.038 0.594 0.594 1.038 0.316 1.583 C 0.132 1.945 0.062 2.324 0.03 2.713 C 0 3.084 0 3.535 0 4.065 L 0 13.235 C 0 13.765 0 14.217 0.03 14.587 C 0.062 14.976 0.132 15.355 0.316 15.717 C 0.594 16.262 1.038 16.706 1.583 16.984 C 1.945 17.168 2.324 17.238 2.713 17.27 C 3.084 17.3 3.535 17.3 4.065 17.3 L 15.735 17.3 C 16.265 17.3 16.716 17.3 17.087 17.27 C 17.476 17.238 17.855 17.168 18.217 16.984 C 18.762 16.706 19.206 16.262 19.484 15.717 C 19.668 15.355 19.738 14.976 19.77 14.587 C 19.8 14.217 19.8 13.765 19.8 13.235 L 19.8 6.065 C 19.8 5.535 19.8 5.084 19.77 4.713 C 19.738 4.324 19.668 3.945 19.484 3.583 C 19.206 3.038 18.762 2.594 18.217 2.316 C 17.855 2.132 17.476 2.062 17.087 2.03 C 16.716 2 16.265 2 15.735 2 L 9.465 2 L 8.036 0.856 C 7.763 0.637 7.532 0.453 7.268 0.318 C 7.035 0.199 6.787 0.112 6.531 0.059 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 3.350)\"/>"
    },
    "IconNormalGlobe2NameGlobeFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.857 1.8 C 9.886 1.8 9.914 1.8 9.943 1.8 C 10.831 3.063 11.517 4.479 11.954 6 L 7.846 6 C 8.283 4.479 8.969 3.063 9.857 1.8 Z M 12.292 2.159 C 12.958 3.353 13.476 4.642 13.818 6 L 17.001 6 C 15.998 4.178 14.314 2.783 12.292 2.159 Z M 17.725 7.8 L 14.163 7.8 C 14.253 8.487 14.3 9.188 14.3 9.9 C 14.3 10.612 14.253 11.313 14.163 12 L 17.725 12 C 17.904 11.33 18 10.626 18 9.9 C 18 9.174 17.904 8.47 17.725 7.8 Z M 17.001 13.8 L 13.818 13.8 C 13.476 15.158 12.958 16.447 12.292 17.641 C 14.314 17.017 15.998 15.622 17.001 13.8 Z M 9.943 18 C 9.914 18 9.886 18 9.857 18 C 8.969 16.737 8.283 15.321 7.846 13.8 L 11.954 13.8 C 11.517 15.321 10.831 16.737 9.943 18 Z M 7.508 17.641 C 5.486 17.017 3.802 15.622 2.799 13.8 L 5.982 13.8 C 6.324 15.158 6.842 16.447 7.508 17.641 Z M 2.075 12 L 5.637 12 C 5.547 11.313 5.5 10.612 5.5 9.9 C 5.5 9.188 5.547 8.487 5.637 7.8 L 2.075 7.8 C 1.896 8.47 1.8 9.174 1.8 9.9 C 1.8 10.626 1.896 11.33 2.075 12 Z M 2.799 6 L 5.982 6 C 6.324 4.642 6.842 3.353 7.508 2.159 C 5.486 2.783 3.802 4.178 2.799 6 Z M 9.9 0 C 4.432 0 0 4.432 0 9.9 C 0 15.368 4.432 19.8 9.9 19.8 C 15.368 19.8 19.8 15.368 19.8 9.9 C 19.8 4.432 15.368 0 9.9 0 Z M 7.455 12 L 12.345 12 C 12.447 11.315 12.5 10.614 12.5 9.9 C 12.5 9.186 12.447 8.485 12.345 7.8 L 7.455 7.8 C 7.353 8.485 7.3 9.186 7.3 9.9 C 7.3 10.614 7.353 11.315 7.455 12 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalGlobe2NameGlobeFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.424 13.595 C 5.895 15.722 6.742 17.69 7.884 19.39 C 4.688 18.728 2.056 16.526 0.799 13.595 L 5.424 13.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 19.002 13.595 C 17.744 16.527 15.111 18.729 11.914 19.39 C 13.056 17.689 13.905 15.723 14.376 13.595 L 19.002 13.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 12.531 13.595 C 12.018 15.68 11.104 17.556 9.899 19.113 C 8.695 17.556 7.782 15.68 7.269 13.595 L 12.531 13.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 19.575 7.595 C 19.722 8.272 19.801 8.974 19.801 9.695 C 19.801 10.416 19.722 11.117 19.576 11.794 L 14.679 11.794 C 14.759 11.106 14.801 10.406 14.801 9.695 C 14.801 8.985 14.759 8.283 14.679 7.595 L 19.575 7.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 5.122 7.595 C 5.042 8.283 5 8.985 5 9.695 C 5 10.405 5.042 11.106 5.122 11.794 L 0.226 11.794 C 0.079 11.117 0 10.416 0 9.695 C 0 8.974 0.079 8.272 0.226 7.595 L 5.122 7.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 12.865 7.595 C 12.953 8.279 13 8.98 13 9.695 C 13 10.41 12.953 11.111 12.866 11.794 L 6.936 11.794 C 6.848 11.111 6.801 10.41 6.801 9.695 C 6.801 8.98 6.848 8.279 6.936 7.595 L 12.865 7.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 11.915 0 C 15.111 0.661 17.744 2.863 19.002 5.794 L 14.376 5.794 C 13.905 3.666 13.057 1.7 11.915 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 7.883 0.001 C 6.741 1.7 5.895 3.667 5.425 5.794 L 0.8 5.794 C 2.058 2.864 4.688 0.663 7.883 0.001 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/><path d=\"M 9.899 0.276 C 11.104 1.833 12.018 3.709 12.531 5.794 L 7.269 5.794 C 7.782 3.709 8.695 1.833 9.899 0.276 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.305)\"/>"
    },
    "IconNormalGraduationNameGraduationFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.879 0.095 C 11.133 -0.032 11.431 -0.032 11.684 0.095 L 21.283 4.894 C 21.487 4.996 21.692 5.099 21.852 5.198 C 22.008 5.295 22.275 5.477 22.429 5.8 C 22.53 6.013 22.574 6.244 22.562 6.474 L 22.562 12.4 C 22.562 12.897 22.159 13.3 21.662 13.3 C 21.165 13.3 20.762 12.897 20.762 12.4 L 20.762 8.166 L 18.682 9.206 L 18.682 13.791 C 18.683 14.391 18.683 14.896 18.523 15.359 C 18.383 15.766 18.155 16.136 17.854 16.443 C 17.511 16.793 17.059 17.019 16.522 17.286 L 13.03 19.032 C 12.59 19.253 12.219 19.439 11.817 19.514 C 11.463 19.58 11.101 19.58 10.747 19.514 C 10.345 19.439 9.974 19.253 9.534 19.032 L 6.042 17.286 C 5.505 17.019 5.053 16.793 4.71 16.443 C 4.409 16.136 4.181 15.766 4.04 15.359 C 3.881 14.896 3.881 14.391 3.882 13.791 L 3.882 9.206 L 1.281 7.906 C 1.077 7.804 0.872 7.701 0.712 7.602 C 0.556 7.505 0.288 7.323 0.135 7 C -0.045 6.62 -0.045 6.18 0.135 5.8 C 0.288 5.477 0.556 5.295 0.712 5.198 C 0.872 5.099 1.077 4.996 1.281 4.894 L 10.879 0.095 Z M 11.684 12.705 L 16.882 10.106 L 16.882 13.672 C 16.882 14.455 16.87 14.632 16.822 14.773 C 16.769 14.927 16.682 15.067 16.568 15.184 C 16.464 15.29 16.311 15.379 15.611 15.729 L 12.311 17.379 C 11.739 17.665 11.607 17.722 11.485 17.745 C 11.351 17.77 11.213 17.77 11.079 17.745 C 10.957 17.722 10.825 17.665 10.253 17.379 L 6.953 15.729 C 6.253 15.379 6.1 15.29 5.996 15.184 C 5.882 15.067 5.795 14.927 5.742 14.773 C 5.694 14.632 5.682 14.455 5.682 13.672 L 5.682 10.106 L 10.879 12.705 C 11.133 12.832 11.431 12.832 11.684 12.705 Z M 2.294 6.4 L 11.282 10.894 L 20.269 6.4 L 11.282 1.906 L 2.294 6.4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.718 2.600)\"/>"
    },
    "IconNormalGraduationNameGraduationFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.124 0.087 C 10.879 -0.029 10.595 -0.029 10.35 0.087 L 1.337 4.379 C 1.121 4.482 0.907 4.584 0.74 4.683 C 0.581 4.777 0.3 4.959 0.14 5.29 C -0.047 5.675 -0.047 6.125 0.14 6.51 C 0.3 6.841 0.581 7.023 0.74 7.117 C 0.907 7.216 1.121 7.318 1.337 7.421 L 10.35 11.713 C 10.595 11.829 10.879 11.829 11.124 11.713 L 19.717 7.621 L 19.717 12.4 C 19.717 12.897 20.12 13.3 20.617 13.3 C 21.114 13.3 21.517 12.897 21.517 12.4 L 21.517 5.9 C 21.517 5.742 21.476 5.593 21.404 5.464 C 21.385 5.405 21.362 5.347 21.334 5.29 C 21.174 4.959 20.893 4.777 20.734 4.683 C 20.567 4.584 20.353 4.482 20.137 4.379 L 11.124 0.087 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.263 3.100)\"/><path d=\"M 3.837 10.606 L 9.576 13.339 C 10.311 13.688 11.163 13.688 11.898 13.339 L 17.637 10.606 L 17.637 13.22 C 17.638 13.842 17.638 14.365 17.469 14.841 C 17.32 15.258 17.078 15.636 16.76 15.945 C 16.398 16.298 15.922 16.515 15.357 16.773 L 12.365 18.144 C 11.954 18.333 11.606 18.493 11.233 18.557 C 10.905 18.614 10.569 18.614 10.241 18.557 C 9.868 18.493 9.52 18.333 9.109 18.144 L 6.117 16.773 C 5.552 16.515 5.076 16.298 4.714 15.945 C 4.396 15.636 4.154 15.258 4.005 14.841 C 3.836 14.365 3.836 13.842 3.837 13.22 L 3.837 10.606 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.263 3.100)\"/>"
    },
    "IconNormalHeartNameHeartFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.564 1.557 C 3.582 -0.452 6.834 -0.517 8.931 1.363 L 9.137 1.557 L 10.421 2.836 L 11.705 1.557 C 13.722 -0.452 16.975 -0.517 19.071 1.363 L 19.277 1.557 C 21.154 3.427 21.362 6.4 19.798 8.51 C 19.487 8.931 18.893 9.019 18.473 8.707 C 18.053 8.396 17.964 7.803 18.276 7.382 C 19.282 6.024 19.148 4.103 17.94 2.9 C 16.651 1.616 14.57 1.562 13.215 2.739 L 13.043 2.9 L 11.09 4.845 C 10.754 5.18 10.229 5.211 9.859 4.937 L 9.752 4.845 L 7.8 2.9 C 6.454 1.56 4.247 1.56 2.902 2.9 C 1.615 4.182 1.561 6.251 2.743 7.602 L 2.905 7.774 L 10.167 15.073 C 10.223 15.129 10.304 15.16 10.442 15.158 C 10.506 15.159 10.563 15.146 10.61 15.121 L 10.674 15.074 L 16.383 9.372 C 16.753 9.002 17.353 9.002 17.723 9.373 C 18.059 9.709 18.089 10.236 17.814 10.606 L 17.722 10.712 L 12.012 16.415 C 11.581 16.845 10.999 17.065 10.442 17.052 C 9.909 17.064 9.39 16.891 8.977 16.549 L 8.827 16.413 L 1.564 9.113 C -0.521 7.034 -0.521 3.636 1.564 1.557 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.579 3.474)\"/>"
    },
    "IconNormalHeartNameHeartFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.421 3.018 L 11.906 1.531 C 13.944 -0.51 17.274 -0.51 19.312 1.531 C 21.352 3.573 21.352 6.914 19.314 8.955 L 11.88 16.466 L 11.878 16.468 C 11.488 16.858 10.964 17.06 10.421 17.052 C 9.877 17.06 9.353 16.858 8.961 16.466 L 1.529 8.957 C -0.51 6.914 -0.51 3.574 1.529 1.531 C 3.568 -0.51 6.897 -0.51 8.936 1.531 L 10.421 3.018 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.579 3.474)\"/>"
    },
    "IconNormalHistoryNameHistory": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.468 0.495 C 13.218 0.035 12.643 -0.135 12.184 0.115 L 8.389 2.18 L 8.274 2.254 C 8.016 2.447 7.88 2.753 7.896 3.061 C 7.895 3.076 7.895 3.091 7.895 3.105 C 7.895 3.412 8.041 3.685 8.267 3.859 L 10.544 7.277 L 10.63 7.388 C 10.939 7.731 11.461 7.804 11.857 7.541 L 11.968 7.455 C 12.311 7.145 12.385 6.623 12.121 6.227 L 10.874 4.355 C 13.72 5.224 15.789 7.87 15.789 11 C 15.789 14.837 12.679 17.948 8.842 17.948 C 6.973 17.948 5.224 17.208 3.929 15.913 C 2.634 14.618 1.895 12.869 1.895 11 C 1.895 9.132 2.634 7.383 3.93 6.087 C 4.299 5.717 4.299 5.117 3.929 4.747 C 3.559 4.377 2.959 4.378 2.589 4.748 C 0.942 6.396 0 8.625 0 11 C 0 13.377 0.943 15.606 2.59 17.253 C 4.236 18.9 6.466 19.842 8.842 19.842 C 13.725 19.842 17.684 15.884 17.684 11 C 17.684 7.077 15.129 3.751 11.593 2.594 L 13.089 1.78 L 13.198 1.711 C 13.574 1.435 13.698 0.916 13.468 0.495 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.000 3.158) matrix(0 -1 1 0 0 17.684)\"/><path d=\"M 0.947 0 C 1.471 0 1.895 0.424 1.895 0.947 L 1.895 4.428 C 1.895 4.952 1.471 5.376 0.947 5.376 C 0.424 5.376 0 4.952 0 4.428 L 0 0.947 C 0 0.424 0.424 0 0.947 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.000 3.158) matrix(1 0 0 1 10.053 4.924)\"/><path d=\"M 0.947 0 C 1.471 0 1.895 0.424 1.895 0.947 L 1.895 4.428 C 1.895 4.952 1.471 5.376 0.947 5.376 C 0.424 5.376 0 4.952 0 4.428 L 0 0.947 C 0 0.424 0.424 0 0.947 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.000 3.158) matrix(0.707 -0.707 0.707 0.707 9.660 9.352)\"/>"
    },
    "IconNormalHomeNameHomeFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.229 0.222 C 8.542 -0.041 8.983 -0.07 9.325 0.134 L 9.448 0.222 L 17.346 6.853 C 17.525 7.003 17.64 7.213 17.674 7.441 L 17.684 7.579 L 17.684 19.263 C 17.684 19.743 17.328 20.139 16.865 20.202 L 16.737 20.211 L 11.052 20.211 C 10.529 20.211 10.104 19.786 10.104 19.263 C 10.104 18.784 10.461 18.387 10.923 18.324 L 11.052 18.316 L 15.789 18.316 L 15.789 8.02 L 8.839 2.184 L 1.894 8.021 L 1.894 18.316 L 5.683 18.316 L 5.683 11.684 C 5.683 11.205 6.04 10.808 6.502 10.745 L 6.631 10.737 L 11.052 10.737 C 11.531 10.737 11.928 11.093 11.991 11.556 L 11.999 11.684 L 11.999 15.474 C 11.999 15.997 11.575 16.421 11.052 16.421 C 10.572 16.421 10.176 16.065 10.113 15.602 L 10.104 15.474 L 10.103 12.632 L 7.578 12.632 L 7.578 19.263 C 7.578 19.743 7.222 20.139 6.759 20.202 L 6.631 20.211 L 0.947 20.211 C 0.468 20.211 0.071 19.854 0.009 19.392 L 0 19.263 L 0 7.579 C 0 7.346 0.086 7.123 0.238 6.95 L 0.338 6.854 L 8.229 0.222 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.159 1.895)\"/>"
    },
    "IconNormalHomeNameHomeFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.229 0.222 L 0.338 6.854 C 0.124 7.034 0 7.299 0 7.579 L 0 19.263 C 0 19.786 0.424 20.211 0.947 20.211 L 5.368 20.211 L 5.496 20.202 C 5.959 20.139 6.315 19.743 6.315 19.263 L 6.315 12.632 L 11.368 12.632 L 11.368 19.263 C 11.368 19.786 11.792 20.211 12.315 20.211 L 16.737 20.211 C 17.26 20.211 17.684 19.786 17.684 19.263 L 17.684 7.579 C 17.684 7.299 17.56 7.033 17.346 6.853 L 9.448 0.222 C 9.095 -0.074 8.581 -0.074 8.229 0.222 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.159 1.895)\"/>"
    },
    "IconNormalImageNameImage": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.949 0 L 19.265 0.025 C 19.744 0.026 20.139 0.382 20.202 0.844 L 20.211 0.972 L 20.211 5.176 C 20.211 5.699 19.786 6.124 19.263 6.124 C 18.784 6.124 18.387 5.767 18.325 5.305 L 18.316 5.176 L 18.315 1.917 L 1.893 1.895 L 1.893 13.262 L 18.315 13.262 L 18.315 10.813 L 13.895 6.393 L 8.88 11.407 C 8.544 11.743 8.018 11.774 7.647 11.498 L 7.541 11.407 L 5.053 8.919 L 4.144 9.828 C 3.807 10.164 3.281 10.195 2.91 9.92 L 2.804 9.828 C 2.467 9.491 2.437 8.965 2.712 8.594 L 2.804 8.488 L 4.383 6.909 C 4.719 6.573 5.245 6.542 5.616 6.817 L 5.723 6.909 L 8.211 9.397 L 13.225 4.383 C 13.561 4.046 14.088 4.016 14.458 4.291 L 14.565 4.383 L 19.933 9.751 C 20.075 9.893 20.168 10.076 20.199 10.272 L 20.211 10.421 L 20.211 14.211 C 20.211 14.69 19.854 15.087 19.392 15.149 L 19.263 15.158 L 0.947 15.158 C 0.468 15.158 0.071 14.801 0.009 14.339 L 0 14.211 L 0 0.947 C 0 0.467 0.357 0.071 0.82 0.008 L 0.949 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 4.421)\"/>"
    },
    "IconNormalInboxNameInbox": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.51 0 C 5.985 0 5.543 -0.001 5.128 0.125 C 4.763 0.236 4.424 0.418 4.129 0.66 C 3.794 0.935 3.549 1.304 3.258 1.74 L 0.656 5.644 C 0.488 5.896 0.346 6.109 0.242 6.346 C 0.151 6.555 0.085 6.773 0.045 6.997 C 0 7.252 0 7.508 0 7.811 L 0 11.736 C 0 12.265 0 12.717 0.03 13.087 C 0.062 13.476 0.132 13.855 0.316 14.217 C 0.594 14.762 1.038 15.206 1.583 15.484 C 1.945 15.668 2.324 15.738 2.713 15.77 C 3.084 15.8 3.535 15.8 4.065 15.8 L 16.735 15.8 C 17.265 15.8 17.716 15.8 18.087 15.77 C 18.476 15.738 18.855 15.668 19.217 15.484 C 19.762 15.206 20.206 14.762 20.484 14.217 C 20.668 13.855 20.738 13.476 20.77 13.087 C 20.8 12.717 20.8 12.265 20.8 11.736 L 20.8 7.811 C 20.8 7.508 20.8 7.252 20.755 6.997 C 20.715 6.773 20.649 6.555 20.558 6.346 C 20.454 6.109 20.312 5.896 20.144 5.644 L 17.542 1.741 C 17.251 1.304 17.006 0.935 16.671 0.66 C 16.377 0.418 16.037 0.236 15.672 0.125 C 15.257 -0.001 14.815 0 14.29 0 L 6.51 0 Z M 5.756 1.821 C 5.841 1.804 5.945 1.8 6.399 1.8 L 14.401 1.8 C 14.855 1.8 14.959 1.804 15.044 1.821 C 15.258 1.864 15.454 1.969 15.608 2.123 C 15.67 2.185 15.731 2.269 15.982 2.646 L 18.218 6.001 L 14.649 6.001 C 13.419 6.001 12.651 7.004 12.321 7.75 C 11.993 8.489 11.255 9.001 10.399 9.001 C 9.544 9.001 8.805 8.489 8.478 7.75 C 8.147 7.004 7.38 6.001 6.149 6.001 L 2.582 6.001 L 4.818 2.646 C 5.069 2.269 5.13 2.185 5.192 2.123 C 5.346 1.969 5.542 1.864 5.756 1.821 Z M 1.8 7.801 L 1.8 12.1 C 1.8 12.915 1.811 13.108 1.854 13.24 C 1.963 13.575 2.225 13.837 2.56 13.946 C 2.692 13.989 2.885 14 3.7 14 L 17.1 14 C 17.915 14 18.108 13.989 18.24 13.946 C 18.575 13.837 18.837 13.575 18.946 13.24 C 18.989 13.108 19 12.915 19 12.1 L 19 7.801 L 14.649 7.801 C 14.322 7.801 14.078 8.226 13.966 8.48 C 13.361 9.845 11.993 10.801 10.399 10.801 C 8.806 10.801 7.438 9.845 6.832 8.48 C 6.72 8.226 6.477 7.801 6.149 7.801 L 1.8 7.801 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.601 4.100)\"/>"
    },
    "IconNormalLikeNameLikeFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.662 2.295 L 10.653 2.514 C 10.612 3.01 10.429 3.41 10.143 3.739 C 9.95 3.962 9.764 4.097 9.676 4.142 L 9.356 4.337 L 8.76 4.716 C 7.875 5.296 7.201 5.821 6.713 6.301 L 6.629 6.296 L 0.947 6.296 C 0.468 6.296 0.071 6.652 0.009 7.114 L 0 7.243 L 0 19.243 C 0 19.723 0.356 20.119 0.819 20.182 L 0.947 20.19 L 6.629 20.19 C 7.109 20.19 7.505 19.834 7.568 19.371 L 7.577 19.243 L 7.577 12.566 C 7.577 12.042 7.152 11.618 6.629 11.618 C 6.15 11.618 5.753 11.975 5.69 12.437 L 5.682 12.566 L 5.683 18.294 L 1.895 18.294 L 1.895 8.189 L 5.681 8.189 C 5.681 8.203 5.682 8.217 5.683 8.23 L 5.682 8.314 C 5.682 8.794 6.038 9.19 6.501 9.253 L 6.629 9.262 C 7.109 9.262 7.505 8.905 7.568 8.443 L 7.574 8.358 C 7.576 8.34 7.578 8.322 7.58 8.305 L 7.58 8.227 L 7.653 8.106 L 7.776 7.945 C 8.159 7.479 8.879 6.883 10.002 6.166 L 10.598 5.797 C 10.829 5.68 11.206 5.406 11.575 4.98 C 12.187 4.274 12.557 3.374 12.557 2.295 C 12.557 1.808 13.564 1.669 13.915 2.366 C 13.973 2.481 14.02 2.598 14.058 2.717 C 14.329 3.579 14.074 4.58 13.443 5.601 C 13.16 6.06 12.877 6.406 12.706 6.583 L 12.622 6.681 C 12.169 7.287 12.592 8.19 13.385 8.19 L 18.324 8.19 L 18.324 14.173 L 15.022 18.296 L 10.388 18.296 L 10.259 18.304 C 9.797 18.367 9.441 18.763 9.441 19.243 C 9.441 19.766 9.865 20.19 10.388 20.19 L 15.478 20.19 L 15.62 20.18 C 15.853 20.144 16.067 20.022 16.217 19.835 L 20.011 15.098 L 20.084 14.993 C 20.172 14.846 20.219 14.678 20.219 14.506 L 20.219 7.243 L 20.21 7.114 C 20.147 6.652 19.751 6.296 19.271 6.296 L 15.233 6.294 L 15.365 6.053 C 16.03 4.775 16.275 3.45 15.865 2.148 C 15.797 1.932 15.711 1.72 15.607 1.514 C 14.416 -0.851 10.662 -0.334 10.662 2.295 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.891 1.915)\"/>"
    },
    "IconNormalLikeNameLikeFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.57 3.534 C 9.807 3.174 9.947 2.761 9.947 2.295 L 9.955 2.097 C 10.138 -0.359 13.732 -0.791 14.893 1.514 C 15.623 2.965 15.219 4.337 14.123 5.55 L 14.058 5.618 L 18.712 5.618 C 19.192 5.618 19.588 5.974 19.651 6.437 L 19.66 6.565 L 19.66 14.019 C 19.66 14.227 19.591 14.429 19.465 14.594 L 15.939 19.212 C 15.76 19.447 15.482 19.585 15.186 19.585 L 8.408 19.585 C 7.885 19.585 7.461 19.16 7.461 18.637 L 7.464 6.488 C 7.522 5.631 8.042 4.664 9.262 3.91 L 9.337 3.835 C 9.381 3.788 9.432 3.726 9.486 3.653 L 9.57 3.534 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.171 2.244)\"/><path d=\"M 4.5 5.633 L 0.947 5.633 C 0.424 5.633 0 6.057 0 6.58 L 0 18.637 C 0 19.16 0.424 19.585 0.947 19.585 L 4.5 19.585 C 5.023 19.585 5.447 19.16 5.447 18.637 L 5.447 6.58 C 5.447 6.057 5.023 5.633 4.5 5.633 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.171 2.244)\"/>"
    },
    "IconNormalLinkNameLink": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16.434 1.202 C 14.831 -0.401 12.232 -0.401 10.629 1.202 L 8.979 2.852 L 8.894 2.949 C 8.611 3.32 8.64 3.853 8.979 4.192 C 9.349 4.562 9.949 4.562 10.319 4.192 L 11.968 2.542 L 12.102 2.419 C 12.97 1.681 14.274 1.722 15.094 2.542 C 15.958 3.405 15.958 4.805 15.094 5.668 L 10.629 10.134 L 10.495 10.257 C 9.627 10.995 8.322 10.954 7.502 10.134 C 7.304 9.936 7.148 9.707 7.039 9.456 L 6.98 9.342 C 6.737 8.943 6.231 8.775 5.792 8.967 C 5.312 9.176 5.093 9.735 5.302 10.214 C 5.506 10.681 5.796 11.107 6.163 11.474 C 7.766 13.077 10.365 13.077 11.968 11.474 L 16.434 7.008 L 16.594 6.839 C 18.036 5.227 17.982 2.75 16.434 1.202 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.293 3.293)\"/><path d=\"M 11.474 6.163 C 9.871 4.559 7.272 4.559 5.668 6.163 L 1.202 10.628 L 1.042 10.798 C -0.399 12.41 -0.346 14.886 1.202 16.434 C 2.806 18.037 5.405 18.037 7.008 16.434 L 8.658 14.784 L 8.743 14.687 C 9.025 14.316 8.997 13.784 8.658 13.445 C 8.288 13.075 7.688 13.075 7.318 13.445 L 5.668 15.094 L 5.535 15.217 C 4.666 15.956 3.362 15.915 2.542 15.094 C 1.679 14.231 1.679 12.832 2.542 11.968 L 7.008 7.502 L 7.142 7.379 C 8.01 6.641 9.314 6.682 10.134 7.502 C 10.341 7.709 10.501 7.949 10.611 8.211 L 10.668 8.326 C 10.905 8.728 11.408 8.904 11.85 8.719 C 12.333 8.517 12.561 7.962 12.359 7.48 C 12.154 6.991 11.856 6.544 11.474 6.163 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.293 3.293)\"/>"
    },
    "IconNormalListNameList": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.25 2.5 C 1.94 2.5 2.5 1.94 2.5 1.25 C 2.5 0.56 1.94 0 1.25 0 C 0.56 0 0 0.56 0 1.25 C 0 1.94 0.56 2.5 1.25 2.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/><path d=\"M 4.85 1.25 C 4.85 0.753 5.253 0.35 5.75 0.35 L 17.75 0.35 C 18.247 0.35 18.65 0.753 18.65 1.25 C 18.65 1.747 18.247 2.15 17.75 2.15 L 5.75 2.15 C 5.253 2.15 4.85 1.747 4.85 1.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/><path d=\"M 1.25 8.75 C 1.94 8.75 2.5 8.19 2.5 7.5 C 2.5 6.81 1.94 6.25 1.25 6.25 C 0.56 6.25 0 6.81 0 7.5 C 0 8.19 0.56 8.75 1.25 8.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/><path d=\"M 4.85 7.5 C 4.85 7.003 5.253 6.6 5.75 6.6 L 17.75 6.6 C 18.247 6.6 18.65 7.003 18.65 7.5 C 18.65 7.997 18.247 8.4 17.75 8.4 L 5.75 8.4 C 5.253 8.4 4.85 7.997 4.85 7.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/><path d=\"M 1.25 15 C 1.94 15 2.5 14.44 2.5 13.75 C 2.5 13.06 1.94 12.5 1.25 12.5 C 0.56 12.5 0 13.06 0 13.75 C 0 14.44 0.56 15 1.25 15 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/><path d=\"M 5.75 12.85 C 5.253 12.85 4.85 13.253 4.85 13.75 C 4.85 14.247 5.253 14.65 5.75 14.65 L 17.75 14.65 C 18.247 14.65 18.65 14.247 18.65 13.75 C 18.65 13.253 18.247 12.85 17.75 12.85 L 5.75 12.85 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.500 4.500)\"/>"
    },
    "IconNormalLocation2NameLocationFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.803 16.53 C 11.83 17.555 10.86 18.393 10.134 18.974 C 9.735 19.294 9.328 19.608 8.904 19.896 C 8.604 20.099 8.194 20.098 7.894 19.895 C 7.471 19.608 7.065 19.293 6.666 18.974 C 5.94 18.393 4.97 17.555 3.997 16.53 C 2.091 14.521 0 11.613 0 8.4 C 0 3.761 3.761 0 8.4 0 C 13.039 0 16.8 3.761 16.8 8.4 C 16.8 11.613 14.709 14.521 12.803 16.53 Z M 8.4 1.8 C 4.755 1.8 1.8 4.755 1.8 8.4 C 1.8 10.881 3.459 13.348 5.303 15.291 C 6.514 16.567 7.736 17.544 8.4 18.041 C 9.064 17.544 10.286 16.567 11.497 15.291 C 13.341 13.348 15 10.881 15 8.4 C 15 4.755 12.045 1.8 8.4 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.350)\"/><path d=\"M 8.4 4.75 C 6.384 4.75 4.75 6.384 4.75 8.4 C 4.75 10.416 6.384 12.05 8.4 12.05 C 10.416 12.05 12.05 10.416 12.05 8.4 C 12.05 6.384 10.416 4.75 8.4 4.75 Z M 6.55 8.4 C 6.55 7.378 7.378 6.55 8.4 6.55 C 9.422 6.55 10.25 7.378 10.25 8.4 C 10.25 9.422 9.422 10.25 8.4 10.25 C 7.378 10.25 6.55 9.422 6.55 8.4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.350)\"/>"
    },
    "IconNormalLocation2NameLocationFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.134 18.974 C 10.86 18.393 11.83 17.555 12.803 16.53 C 14.709 14.521 16.8 11.613 16.8 8.4 C 16.8 3.761 13.039 0 8.4 0 C 3.761 0 0 3.761 0 8.4 C 0 11.613 2.091 14.521 3.997 16.53 C 4.97 17.555 5.94 18.393 6.666 18.974 C 7.065 19.293 7.471 19.608 7.894 19.895 C 8.194 20.098 8.604 20.099 8.904 19.896 C 9.328 19.608 9.735 19.294 10.134 18.974 Z M 11.15 8.4 C 11.15 9.919 9.919 11.15 8.4 11.15 C 6.881 11.15 5.65 9.919 5.65 8.4 C 5.65 6.881 6.881 5.65 8.4 5.65 C 9.919 5.65 11.15 6.881 11.15 8.4 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.349)\"/>"
    },
    "IconNormalLock2NameLockFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.4 0 C 7.052 0 5.702 0.551 4.749 1.493 L 4.746 1.496 C 3.934 2.309 3.516 3.27 3.351 4.513 L 3.351 4.518 C 3.275 5.113 3.25 5.814 3.25 6.85 L 3.25 7.256 C 3.055 7.26 2.876 7.267 2.713 7.281 C 2.324 7.312 1.945 7.382 1.583 7.566 C 1.038 7.845 0.594 8.288 0.316 8.834 C 0.132 9.196 0.062 9.574 0.03 9.964 C 0 10.334 0 10.785 0 11.315 L 0 15.486 C 0 16.016 0 16.467 0.03 16.837 C 0.062 17.226 0.132 17.605 0.316 17.967 C 0.594 18.513 1.038 18.956 1.583 19.234 C 1.945 19.419 2.324 19.488 2.713 19.52 C 3.084 19.55 3.535 19.55 4.065 19.55 L 12.735 19.55 C 13.265 19.55 13.716 19.55 14.087 19.52 C 14.476 19.488 14.855 19.419 15.217 19.234 C 15.762 18.956 16.206 18.513 16.484 17.967 C 16.668 17.605 16.738 17.226 16.77 16.837 C 16.8 16.467 16.8 16.016 16.8 15.486 L 16.8 11.315 C 16.8 10.785 16.8 10.334 16.77 9.964 C 16.738 9.574 16.668 9.196 16.484 8.834 C 16.206 8.288 15.762 7.845 15.217 7.566 C 14.855 7.382 14.476 7.312 14.087 7.281 C 13.923 7.267 13.744 7.26 13.55 7.256 L 13.55 6.85 C 13.55 5.765 13.525 5.073 13.458 4.524 L 13.457 4.51 C 13.291 3.294 12.866 2.308 12.054 1.496 L 12.05 1.493 C 11.089 0.542 9.756 0 8.4 0 Z M 11.75 7.25 L 11.75 6.85 C 11.75 5.782 11.724 5.182 11.672 4.746 C 11.548 3.842 11.261 3.249 10.783 2.771 C 10.163 2.159 9.287 1.8 8.4 1.8 C 7.522 1.8 6.629 2.167 6.017 2.771 C 5.539 3.249 5.26 3.817 5.136 4.747 C 5.076 5.223 5.05 5.831 5.05 6.85 L 5.05 7.25 L 11.75 7.25 Z M 2.56 9.104 C 2.692 9.061 2.885 9.05 3.7 9.05 L 13.1 9.05 C 13.915 9.05 14.108 9.061 14.24 9.104 C 14.575 9.213 14.837 9.475 14.946 9.81 C 14.989 9.942 15 10.136 15 10.95 L 15 15.85 C 15 16.665 14.989 16.859 14.946 16.99 C 14.837 17.325 14.575 17.588 14.24 17.696 C 14.108 17.739 13.915 17.75 13.1 17.75 L 3.7 17.75 C 2.885 17.75 2.692 17.739 2.56 17.696 C 2.225 17.588 1.963 17.325 1.854 16.99 C 1.811 16.859 1.8 16.665 1.8 15.85 L 1.8 10.95 C 1.8 10.136 1.811 9.942 1.854 9.81 C 1.963 9.475 2.225 9.213 2.56 9.104 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.350)\"/>"
    },
    "IconNormalLock2NameLockFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.4 0 C 7.052 0 5.702 0.551 4.749 1.493 L 4.746 1.496 C 3.934 2.309 3.516 3.27 3.351 4.513 L 3.351 4.518 C 3.275 5.113 3.25 5.814 3.25 6.85 L 3.25 7.256 C 3.055 7.26 2.876 7.267 2.713 7.281 C 2.324 7.312 1.945 7.382 1.583 7.566 C 1.038 7.845 0.594 8.288 0.316 8.834 C 0.132 9.196 0.062 9.574 0.03 9.964 C 0 10.334 0 10.785 0 11.315 L 0 15.486 C 0 16.016 0 16.467 0.03 16.837 C 0.062 17.226 0.132 17.605 0.316 17.967 C 0.594 18.513 1.038 18.956 1.583 19.234 C 1.945 19.419 2.324 19.488 2.713 19.52 C 3.084 19.55 3.535 19.55 4.065 19.55 L 12.735 19.55 C 13.265 19.55 13.716 19.55 14.087 19.52 C 14.476 19.488 14.855 19.419 15.217 19.234 C 15.762 18.956 16.206 18.513 16.484 17.967 C 16.668 17.605 16.738 17.226 16.77 16.837 C 16.8 16.467 16.8 16.016 16.8 15.486 L 16.8 11.315 C 16.8 10.785 16.8 10.334 16.77 9.964 C 16.738 9.574 16.668 9.196 16.484 8.834 C 16.206 8.288 15.762 7.845 15.217 7.566 C 14.855 7.382 14.476 7.312 14.087 7.281 C 13.923 7.267 13.744 7.26 13.55 7.256 L 13.55 6.85 C 13.55 5.765 13.525 5.073 13.458 4.524 L 13.457 4.51 C 13.291 3.294 12.866 2.308 12.054 1.496 L 12.05 1.493 C 11.089 0.542 9.756 0 8.4 0 Z M 11.75 7.25 L 11.75 6.85 C 11.75 5.782 11.724 5.182 11.672 4.746 C 11.548 3.842 11.261 3.249 10.783 2.771 C 10.163 2.159 9.287 1.8 8.4 1.8 C 7.522 1.8 6.629 2.167 6.017 2.771 C 5.539 3.249 5.26 3.817 5.136 4.747 C 5.076 5.223 5.05 5.831 5.05 6.85 L 5.05 7.25 L 11.75 7.25 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 2.349)\"/>"
    },
    "IconNormalLockOpen2NameLockOpenFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.4 0 C 7.052 0 5.702 0.551 4.749 1.493 L 4.746 1.496 C 3.934 2.309 3.516 3.27 3.351 4.513 L 3.351 4.518 C 3.275 5.113 3.25 5.814 3.25 6.85 L 3.25 7.756 C 3.055 7.76 2.876 7.767 2.713 7.781 C 2.324 7.813 1.945 7.882 1.583 8.067 C 1.038 8.345 0.594 8.788 0.316 9.334 C 0.132 9.696 0.062 10.074 0.03 10.464 C 0 10.834 0 11.285 0 11.815 L 0 15.986 C 0 16.516 0 16.967 0.03 17.337 C 0.062 17.727 0.132 18.105 0.316 18.467 C 0.594 19.013 1.038 19.456 1.583 19.734 C 1.945 19.919 2.324 19.988 2.713 20.02 C 3.084 20.051 3.535 20.051 4.065 20.05 L 12.735 20.05 C 13.265 20.051 13.716 20.051 14.087 20.02 C 14.476 19.988 14.855 19.919 15.217 19.734 C 15.762 19.456 16.206 19.013 16.484 18.467 C 16.668 18.105 16.738 17.727 16.77 17.337 C 16.8 16.967 16.8 16.516 16.8 15.986 L 16.8 11.815 C 16.8 11.285 16.8 10.834 16.77 10.464 C 16.738 10.074 16.668 9.696 16.484 9.334 C 16.206 8.788 15.762 8.345 15.217 8.067 C 14.855 7.882 14.476 7.813 14.087 7.781 C 13.716 7.75 13.265 7.75 12.735 7.75 L 5.05 7.75 L 5.05 6.85 C 5.05 5.831 5.076 5.223 5.136 4.747 C 5.26 3.817 5.539 3.249 6.017 2.771 C 6.629 2.167 7.522 1.8 8.4 1.8 C 9.287 1.8 10.163 2.159 10.783 2.771 C 11.262 3.25 11.55 3.845 11.673 4.753 C 11.74 5.245 12.194 5.59 12.686 5.523 C 13.179 5.456 13.524 5.003 13.457 4.51 C 13.291 3.294 12.866 2.308 12.054 1.496 L 12.05 1.493 C 11.089 0.542 9.756 0 8.4 0 Z M 2.56 9.604 C 2.692 9.561 2.885 9.55 3.7 9.55 L 13.1 9.55 C 13.915 9.55 14.108 9.561 14.24 9.604 C 14.575 9.713 14.837 9.976 14.946 10.31 C 14.989 10.442 15 10.636 15 11.45 L 15 16.35 C 15 17.165 14.989 17.359 14.946 17.49 C 14.837 17.825 14.575 18.088 14.24 18.196 C 14.108 18.239 13.915 18.25 13.1 18.25 L 3.7 18.25 C 2.885 18.25 2.692 18.239 2.56 18.196 C 2.225 18.088 1.963 17.825 1.854 17.49 C 1.811 17.359 1.8 17.165 1.8 16.35 L 1.8 11.45 C 1.8 10.636 1.811 10.442 1.854 10.31 C 1.963 9.976 2.225 9.713 2.56 9.604 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.600 1.849)\"/>"
    },
    "IconNormalLockOpen2NameLockOpenFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.4 0 C 7.052 0 5.702 0.551 4.749 1.493 L 4.746 1.496 C 3.934 2.309 3.516 3.27 3.351 4.513 L 3.351 4.518 C 3.275 5.113 3.25 5.814 3.25 6.85 L 3.25 7.756 C 3.055 7.76 2.876 7.767 2.713 7.781 C 2.324 7.813 1.945 7.882 1.583 8.067 C 1.038 8.345 0.594 8.788 0.316 9.334 C 0.132 9.696 0.062 10.074 0.03 10.464 C 0 10.834 0 11.285 0 11.815 L 0 15.986 C 0 16.516 0 16.967 0.03 17.337 C 0.062 17.727 0.132 18.105 0.316 18.467 C 0.594 19.013 1.038 19.456 1.583 19.734 C 1.945 19.919 2.324 19.988 2.713 20.02 C 3.084 20.051 3.535 20.051 4.065 20.05 L 12.735 20.05 C 13.265 20.051 13.716 20.051 14.087 20.02 C 14.476 19.988 14.855 19.919 15.217 19.734 C 15.762 19.456 16.206 19.013 16.484 18.467 C 16.668 18.105 16.738 17.727 16.77 17.337 C 16.8 16.967 16.8 16.516 16.8 15.986 L 16.8 11.815 C 16.8 11.285 16.8 10.834 16.77 10.464 C 16.738 10.074 16.668 9.696 16.484 9.334 C 16.206 8.788 15.762 8.345 15.217 8.067 C 14.855 7.882 14.476 7.813 14.087 7.781 C 13.716 7.75 13.265 7.75 12.735 7.75 L 5.05 7.75 L 5.05 6.85 C 5.05 5.831 5.076 5.223 5.136 4.747 C 5.26 3.817 5.539 3.249 6.017 2.771 C 6.629 2.167 7.522 1.8 8.4 1.8 C 9.287 1.8 10.163 2.159 10.783 2.771 C 11.262 3.25 11.55 3.845 11.673 4.753 C 11.74 5.245 12.194 5.59 12.686 5.523 C 13.179 5.456 13.524 5.003 13.457 4.51 C 13.291 3.294 12.866 2.308 12.054 1.496 L 12.05 1.493 C 11.089 0.542 9.756 0 8.4 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.600 1.849)\"/>"
    },
    "IconNormalLoginNameLogin": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.888 0 C 14.696 0 15.356 0 15.893 0.044 C 16.449 0.089 16.951 0.186 17.42 0.425 C 18.154 0.799 18.751 1.396 19.125 2.129 C 19.364 2.598 19.461 3.1 19.506 3.656 C 19.55 4.193 19.55 4.854 19.55 5.662 L 19.55 13.138 C 19.55 13.946 19.55 14.607 19.506 15.144 C 19.461 15.7 19.364 16.202 19.125 16.671 C 18.751 17.404 18.154 18.001 17.42 18.375 C 16.951 18.614 16.449 18.711 15.893 18.756 C 15.356 18.8 14.696 18.8 13.888 18.8 L 12.9 18.8 C 12.403 18.8 12 18.397 12 17.9 C 12 17.403 12.403 17 12.9 17 L 13.85 17 C 14.705 17 15.292 16.999 15.747 16.962 C 16.192 16.926 16.43 16.859 16.603 16.771 C 16.998 16.57 17.32 16.249 17.521 15.853 C 17.609 15.681 17.676 15.442 17.712 14.997 C 17.749 14.542 17.75 13.955 17.75 13.1 L 17.75 5.7 C 17.75 4.845 17.749 4.258 17.712 3.803 C 17.676 3.358 17.609 3.119 17.521 2.947 C 17.32 2.551 16.998 2.23 16.603 2.029 C 16.43 1.941 16.192 1.874 15.747 1.838 C 15.292 1.801 14.705 1.8 13.85 1.8 L 12.9 1.8 C 12.403 1.8 12 1.397 12 0.9 C 12 0.403 12.403 0 12.9 0 L 13.888 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.350 2.600)\"/><path d=\"M 8.536 14.536 L 13.036 10.036 C 13.388 9.685 13.388 9.115 13.036 8.763 L 8.536 4.263 C 8.185 3.912 7.615 3.912 7.264 4.263 C 6.912 4.615 6.912 5.185 7.264 5.536 L 10.227 8.5 L 0.9 8.5 C 0.403 8.5 0 8.903 0 9.4 C 0 9.897 0.403 10.3 0.9 10.3 L 10.227 10.3 L 7.264 13.263 C 6.912 13.615 6.912 14.185 7.264 14.536 C 7.615 14.888 8.185 14.888 8.536 14.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.350 2.600)\"/>"
    },
    "IconNormalLogoAppleNameLogoApple": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.381 21.346 C 6.662 21.346 7.224 20.458 8.819 20.458 C 10.414 20.458 10.796 21.312 12.212 21.312 C 13.627 21.312 14.537 19.986 15.425 18.683 C 16.414 17.189 16.818 15.728 16.852 15.661 C 16.762 15.639 14.088 14.504 14.088 11.347 C 14.088 8.606 16.2 7.37 16.313 7.28 C 14.919 5.213 12.796 5.168 12.223 5.168 C 10.662 5.168 9.381 6.145 8.572 6.145 C 7.707 6.145 6.561 5.224 5.202 5.224 C 2.618 5.224 0 7.426 0 11.572 C 0 14.144 0.977 16.874 2.168 18.638 C 3.191 20.132 4.089 21.357 5.381 21.357 L 5.381 21.346 Z M 8.673 4.921 C 9.606 4.921 10.785 4.269 11.482 3.404 C 12.111 2.618 12.571 1.517 12.571 0.416 C 12.571 0.27 12.56 0.112 12.526 0 C 11.482 0.045 10.235 0.719 9.482 1.629 C 8.887 2.326 8.347 3.404 8.347 4.516 C 8.347 4.674 8.37 4.842 8.392 4.898 C 8.46 4.91 8.561 4.921 8.673 4.921 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.574 0.602)\"/>"
    },
    "IconNormalLogoFacebookNameLogoFacebook": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.9 0 C 4.435 0 0 4.435 0 9.9 C 0 14.84 3.623 18.939 8.356 19.681 L 8.356 12.761 L 5.841 12.761 L 5.841 9.9 L 8.356 9.9 L 8.356 7.722 C 8.356 5.237 9.831 3.871 12.098 3.871 C 13.177 3.871 14.315 4.069 14.315 4.069 L 14.315 6.504 L 13.068 6.504 C 11.84 6.504 11.454 7.267 11.454 8.049 L 11.454 9.91 L 14.197 9.91 L 13.761 12.771 L 11.454 12.771 L 11.454 19.691 C 16.186 18.949 19.8 14.84 19.8 9.9 C 19.8 4.435 15.375 0.01 9.91 0.01 L 9.9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.100)\"/>"
    },
    "IconNormalLogoInstagramNameLogoInstagram": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 15.951 4.498 C 15.951 5.142 15.436 5.657 14.792 5.657 C 14.148 5.657 13.632 5.142 13.632 4.498 C 13.632 3.854 14.148 3.338 14.792 3.338 C 15.436 3.338 15.951 3.854 15.951 4.498 Z M 19.3 9.65 C 19.3 12.269 19.289 12.602 19.246 13.632 C 19.203 14.663 19.032 15.361 18.795 15.972 C 18.549 16.606 18.216 17.142 17.679 17.679 C 17.142 18.216 16.606 18.549 15.972 18.796 C 15.361 19.032 14.652 19.193 13.632 19.246 C 12.602 19.289 12.269 19.3 9.65 19.3 C 7.031 19.3 6.698 19.289 5.668 19.246 C 4.637 19.203 3.939 19.032 3.328 18.796 C 2.694 18.549 2.158 18.216 1.621 17.679 C 1.084 17.142 0.751 16.606 0.505 15.972 C 0.268 15.361 0.107 14.652 0.054 13.632 C 0.011 12.602 0 12.269 0 9.65 C 0 7.031 0.011 6.698 0.054 5.668 C 0.097 4.637 0.268 3.939 0.505 3.328 C 0.751 2.694 1.084 2.158 1.621 1.621 C 2.158 1.084 2.694 0.751 3.328 0.505 C 3.939 0.268 4.648 0.107 5.668 0.054 C 6.698 0.011 7.031 0 9.65 0 C 12.269 0 12.602 0.011 13.632 0.054 C 14.663 0.097 15.361 0.268 15.972 0.505 C 16.606 0.751 17.142 1.084 17.679 1.621 C 18.216 2.158 18.549 2.694 18.795 3.328 C 19.032 3.939 19.193 4.648 19.246 5.668 C 19.289 6.698 19.3 7.031 19.3 9.65 Z M 17.561 9.65 C 17.561 7.074 17.561 6.763 17.507 5.743 C 17.464 4.798 17.303 4.294 17.175 3.95 C 17.003 3.499 16.788 3.177 16.455 2.845 C 16.123 2.512 15.801 2.297 15.35 2.125 C 15.006 1.997 14.502 1.836 13.557 1.793 C 12.537 1.75 12.237 1.739 9.65 1.739 C 7.063 1.739 6.762 1.739 5.743 1.793 C 4.798 1.836 4.294 1.997 3.95 2.125 C 3.499 2.297 3.177 2.512 2.845 2.845 C 2.512 3.177 2.297 3.499 2.125 3.95 C 1.997 4.294 1.836 4.798 1.793 5.743 C 1.75 6.763 1.739 7.063 1.739 9.65 C 1.739 12.237 1.739 12.537 1.793 13.557 C 1.836 14.502 1.997 15.006 2.125 15.35 C 2.297 15.801 2.512 16.123 2.845 16.455 C 3.177 16.788 3.499 17.003 3.95 17.175 C 4.294 17.303 4.798 17.464 5.743 17.507 C 6.762 17.55 7.063 17.561 9.65 17.561 C 12.237 17.561 12.537 17.561 13.557 17.507 C 14.502 17.464 15.006 17.303 15.35 17.175 C 15.801 17.003 16.123 16.788 16.455 16.455 C 16.788 16.123 17.003 15.801 17.175 15.35 C 17.303 15.006 17.464 14.502 17.507 13.557 C 17.55 12.537 17.561 12.237 17.561 9.65 Z M 14.598 9.65 C 14.598 12.387 12.376 14.609 9.639 14.609 C 6.902 14.609 4.68 12.387 4.68 9.65 C 4.68 6.913 6.902 4.691 9.639 4.691 C 12.376 4.691 14.598 6.913 14.598 9.65 Z M 12.859 9.65 C 12.859 7.868 11.421 6.43 9.639 6.43 C 7.857 6.43 6.419 7.868 6.419 9.65 C 6.419 11.432 7.857 12.87 9.639 12.87 C 11.421 12.87 12.859 11.432 12.859 9.65 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.350 2.350)\"/>"
    },
    "IconNormalLogoKakaoNameLogoKakao": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.429 0 C 4.224 0 0 3.281 0 7.317 C 0 9.834 1.631 12.031 4.12 13.37 L 3.074 17.207 C 3.054 17.283 3.058 17.364 3.085 17.438 C 3.113 17.512 3.162 17.576 3.227 17.621 C 3.291 17.666 3.368 17.69 3.447 17.691 C 3.526 17.691 3.603 17.667 3.668 17.622 L 8.25 14.577 C 8.637 14.577 9.033 14.643 9.429 14.643 C 14.633 14.643 18.857 11.361 18.857 7.317 C 18.857 3.272 14.633 0 9.429 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.572 3.154)\"/>"
    },
    "IconNormalLogoLinkedInNameLogoLinkedIn": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.039 0 L 7.261 0 C 6.174 0 5.303 0 4.6 0.057 C 3.877 0.117 3.251 0.241 2.675 0.534 C 1.753 1.004 1.004 1.753 0.534 2.675 C 0.241 3.251 0.117 3.877 0.057 4.6 C 0 5.303 0 6.174 0 7.261 L 0 12.039 C 0 13.126 0 13.997 0.057 14.7 C 0.117 15.423 0.241 16.049 0.534 16.625 C 1.004 17.547 1.753 18.296 2.675 18.766 C 3.251 19.059 3.877 19.183 4.6 19.243 C 5.303 19.3 6.174 19.3 7.261 19.3 L 12.039 19.3 C 13.126 19.3 13.997 19.3 14.7 19.243 C 15.423 19.183 16.049 19.059 16.624 18.766 C 17.546 18.296 18.296 17.547 18.766 16.625 C 19.059 16.049 19.183 15.423 19.242 14.7 C 19.3 13.997 19.3 13.126 19.3 12.039 L 19.3 7.261 C 19.3 6.174 19.3 5.303 19.242 4.6 C 19.183 3.877 19.059 3.251 18.766 2.675 C 18.296 1.753 17.546 1.004 16.624 0.534 C 16.049 0.241 15.423 0.117 14.7 0.057 C 13.997 0 13.126 0 12.039 0 Z M 4.2 5.499 C 4.2 6.217 4.78 6.799 5.499 6.799 C 6.215 6.799 6.796 6.214 6.796 5.499 C 6.796 4.782 6.215 4.2 5.499 4.2 C 4.78 4.2 4.2 4.782 4.2 5.499 Z M 4.38 15 L 6.619 15 L 6.619 7.782 L 4.38 7.782 L 4.38 15 Z M 15 15 L 12.763 15 L 12.763 11.492 C 12.763 10.656 12.748 9.578 11.599 9.578 C 10.435 9.578 10.258 10.49 10.258 11.432 L 10.258 15 L 8.025 15 L 8.025 7.782 L 10.17 7.782 L 10.17 8.769 L 10.199 8.769 C 10.497 8.202 11.228 7.602 12.315 7.602 C 14.581 7.602 15 9.096 15 11.04 L 15 15 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.350 2.350)\"/>"
    },
    "IconNormalLogoNaverBlogNameLogoNaverBlog": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.406 0 L 16.394 0 C 18.275 0 19.8 1.525 19.8 3.406 L 19.8 11.464 C 19.8 13.345 18.275 14.87 16.394 14.87 L 11.771 14.87 L 10.207 17.573 C 10.068 17.82 9.702 17.82 9.563 17.573 L 7.999 14.87 L 3.406 14.87 C 1.525 14.87 0 13.345 0 11.464 L 0 3.406 C 0 1.525 1.525 0 3.406 0 Z M 4.603 9.682 C 4.227 9.682 3.881 9.524 3.604 9.256 L 3.604 9.583 L 2.485 9.583 L 2.485 4.653 L 3.604 4.653 L 3.604 6.217 C 3.881 5.95 4.217 5.791 4.603 5.791 C 5.633 5.791 6.475 6.663 6.475 7.742 C 6.475 8.821 5.633 9.682 4.603 9.682 Z M 8.286 9.583 L 7.158 9.583 L 7.158 6.346 C 7.158 5.801 6.861 5.544 6.554 5.534 L 6.554 4.534 C 7.306 4.584 8.286 5.079 8.286 6.336 L 8.286 9.583 Z M 10.87 9.682 C 9.791 9.682 8.92 8.811 8.92 7.732 C 8.92 6.653 9.791 5.782 10.87 5.782 C 11.949 5.782 12.82 6.653 12.82 7.732 C 12.82 8.811 11.949 9.682 10.87 9.682 Z M 17.305 9.306 C 17.305 10.811 16.157 11.137 15.365 11.167 L 15.365 10.177 C 16.077 10.138 16.236 9.791 16.226 9.167 L 16.226 9.098 C 15.949 9.375 15.592 9.544 15.196 9.544 C 14.167 9.544 13.325 8.702 13.325 7.672 C 13.325 6.643 14.167 5.801 15.196 5.801 C 15.592 5.801 15.949 5.97 16.226 6.247 L 16.226 5.91 L 17.305 5.91 L 17.305 9.306 Z M 16.285 7.663 C 16.285 8.167 15.86 8.583 15.335 8.583 C 14.81 8.583 14.385 8.167 14.385 7.663 C 14.385 7.158 14.81 6.742 15.335 6.742 C 15.86 6.742 16.285 7.158 16.285 7.663 Z M 5.435 7.742 C 5.435 8.266 5.009 8.702 4.475 8.702 C 3.94 8.702 3.514 8.276 3.514 7.742 C 3.514 7.207 3.94 6.781 4.475 6.781 C 5.009 6.781 5.435 7.207 5.435 7.742 Z M 11.791 7.742 C 11.791 8.247 11.375 8.662 10.87 8.662 C 10.365 8.662 9.949 8.247 9.949 7.742 C 9.949 7.237 10.365 6.821 10.87 6.821 C 11.375 6.821 11.791 7.237 11.791 7.742 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.100 4.080)\"/>"
    },
    "IconNormalLogoYouTubeNameLogoYoutube": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18.968 0.447 C 19.883 0.692 20.608 1.416 20.853 2.332 C 21.3 3.994 21.3 7.455 21.3 7.455 C 21.3 7.455 21.3 10.916 20.853 12.578 C 20.608 13.494 19.883 14.218 18.968 14.463 C 17.306 14.91 10.65 14.91 10.65 14.91 C 10.65 14.91 3.994 14.91 2.332 14.463 C 1.416 14.218 0.692 13.494 0.447 12.578 C 0 10.916 0 7.455 0 7.455 C 0 7.455 0 3.994 0.447 2.332 C 0.692 1.416 1.416 0.692 2.332 0.447 C 3.994 0 10.65 0 10.65 0 C 10.65 0 17.306 0 18.968 0.447 Z M 8.52 4.26 L 8.52 10.65 L 14.058 7.455 L 8.52 4.26 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.350 4.545)\"/>"
    },
    "IconNormalLogoutNameLogout": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.662 0 C 4.854 0 4.193 0 3.656 0.044 C 3.1 0.089 2.598 0.186 2.129 0.425 C 1.396 0.799 0.799 1.396 0.425 2.129 C 0.186 2.598 0.089 3.1 0.044 3.656 C 0 4.193 0 4.854 0 5.662 L 0 13.138 C 0 13.946 0 14.607 0.044 15.144 C 0.089 15.7 0.186 16.202 0.425 16.671 C 0.799 17.404 1.396 18.001 2.129 18.375 C 2.598 18.614 3.1 18.711 3.656 18.756 C 4.193 18.8 4.854 18.8 5.662 18.8 L 6.65 18.8 C 7.147 18.8 7.55 18.397 7.55 17.9 C 7.55 17.403 7.147 17 6.65 17 L 5.7 17 C 4.845 17 4.258 16.999 3.803 16.962 C 3.358 16.926 3.119 16.859 2.947 16.771 C 2.551 16.57 2.23 16.249 2.029 15.853 C 1.941 15.681 1.874 15.442 1.838 14.997 C 1.801 14.542 1.8 13.955 1.8 13.1 L 1.8 5.7 C 1.8 4.845 1.801 4.258 1.838 3.803 C 1.874 3.358 1.941 3.119 2.029 2.947 C 2.23 2.551 2.551 2.23 2.947 2.029 C 3.119 1.941 3.358 1.874 3.803 1.838 C 4.258 1.801 4.845 1.8 5.7 1.8 L 6.65 1.8 C 7.147 1.8 7.55 1.397 7.55 0.9 C 7.55 0.403 7.147 0 6.65 0 L 5.662 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.600)\"/><path d=\"M 14.286 14.536 L 18.786 10.036 C 19.138 9.684 19.138 9.114 18.786 8.763 L 14.286 4.263 C 13.935 3.911 13.365 3.911 13.014 4.263 C 12.662 4.614 12.662 5.184 13.014 5.536 L 15.977 8.499 L 6.65 8.499 C 6.153 8.499 5.75 8.902 5.75 9.399 C 5.75 9.896 6.153 10.299 6.65 10.299 L 15.977 10.299 L 13.014 13.263 C 12.662 13.614 12.662 14.184 13.014 14.536 C 13.365 14.887 13.935 14.887 14.286 14.536 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.100 2.600)\"/>"
    },
    "IconNormalMagicWandNameMagicWand": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.5 0.9 C 2.5 0.403 2.903 0 3.4 0 C 3.897 0 4.3 0.403 4.3 0.9 C 4.3 1.788 4.46 2.093 4.583 2.217 C 4.707 2.34 5.012 2.5 5.9 2.5 C 6.397 2.5 6.8 2.903 6.8 3.4 C 6.8 3.897 6.397 4.3 5.9 4.3 C 5.012 4.3 4.707 4.46 4.583 4.583 C 4.46 4.707 4.3 5.012 4.3 5.9 C 4.3 6.397 3.897 6.8 3.4 6.8 C 2.903 6.8 2.5 6.397 2.5 5.9 C 2.5 5.012 2.34 4.707 2.217 4.583 C 2.093 4.46 1.788 4.3 0.9 4.3 C 0.403 4.3 0 3.897 0 3.4 C 0 2.903 0.403 2.5 0.9 2.5 C 1.788 2.5 2.093 2.34 2.217 2.217 C 2.34 2.093 2.5 1.788 2.5 0.9 Z M 15.9 2 C 15.403 2 15 2.403 15 2.9 C 15 3.6 14.872 3.781 14.826 3.826 C 14.781 3.872 14.6 4 13.9 4 C 13.403 4 13 4.403 13 4.9 C 13 5.397 13.403 5.8 13.9 5.8 C 14.6 5.8 14.781 5.928 14.826 5.974 C 14.872 6.02 15 6.2 15 6.9 C 15 7.397 15.403 7.8 15.9 7.8 C 16.397 7.8 16.8 7.397 16.8 6.9 C 16.8 6.2 16.928 6.02 16.974 5.974 C 17.02 5.928 17.2 5.8 17.9 5.8 C 18.397 5.8 18.8 5.397 18.8 4.9 C 18.8 4.403 18.397 4 17.9 4 C 17.2 4 17.02 3.872 16.974 3.826 C 16.928 3.781 16.8 3.6 16.8 2.9 C 16.8 2.403 16.397 2 15.9 2 Z M 4.9 13 C 4.403 13 4 13.403 4 13.9 C 4 14.6 3.872 14.781 3.826 14.826 C 3.781 14.872 3.6 15 2.9 15 C 2.403 15 2 15.403 2 15.9 C 2 16.397 2.403 16.8 2.9 16.8 C 3.6 16.8 3.781 16.928 3.826 16.974 C 3.872 17.02 4 17.2 4 17.9 C 4 18.397 4.403 18.8 4.9 18.8 C 5.397 18.8 5.8 18.397 5.8 17.9 C 5.8 17.2 5.929 17.02 5.974 16.974 C 6.02 16.928 6.2 16.8 6.9 16.8 C 7.397 16.8 7.8 16.397 7.8 15.9 C 7.8 15.403 7.397 15 6.9 15 C 6.2 15 6.02 14.872 5.974 14.826 C 5.929 14.781 5.8 14.6 5.8 13.9 C 5.8 13.403 5.397 13 4.9 13 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.600 1.600)\"/><path d=\"M 9.244 6.112 C 8.712 5.848 8.088 5.848 7.556 6.112 C 7.27 6.253 7.03 6.495 6.822 6.705 L 6.705 6.822 C 6.496 7.03 6.253 7.271 6.112 7.556 C 5.848 8.088 5.848 8.712 6.112 9.243 C 6.253 9.529 6.496 9.77 6.705 9.978 L 15.822 19.095 C 16.03 19.304 16.271 19.546 16.556 19.688 C 17.088 19.951 17.712 19.951 18.243 19.688 C 18.529 19.546 18.77 19.304 18.978 19.095 L 19.095 18.978 C 19.304 18.77 19.546 18.529 19.688 18.243 C 19.951 17.712 19.951 17.088 19.688 16.556 C 19.546 16.27 19.304 16.03 19.095 15.822 L 9.978 6.705 C 9.77 6.495 9.529 6.253 9.244 6.112 Z M 8.329 7.743 C 8.368 7.704 8.432 7.704 8.471 7.743 L 12.763 12.036 L 12.036 12.763 L 7.744 8.47 C 7.704 8.431 7.704 8.368 7.744 8.329 L 8.329 7.743 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.600 1.600)\"/>"
    },
    "IconNormalMailNameMail": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.202 0.819 C 20.139 0.356 19.743 0 19.263 0 L 0.948 0 L 0.819 0.009 C 0.357 0.071 0 0.468 0 0.947 L 0 3.772 C 0 3.783 0 3.794 0 3.806 L 0 14.211 L 0.009 14.339 C 0.072 14.801 0.468 15.158 0.948 15.158 L 19.263 15.158 L 19.392 15.149 C 19.854 15.087 20.211 14.69 20.211 14.211 L 20.211 7.579 L 20.202 7.45 C 20.139 6.988 19.743 6.632 19.263 6.632 L 19.135 6.64 C 18.672 6.703 18.316 7.099 18.316 7.579 L 18.316 13.263 L 1.895 13.263 L 1.895 5.443 L 9.626 9.975 L 9.757 10.039 C 10.025 10.145 10.331 10.124 10.585 9.975 L 19.727 4.616 C 19.77 4.592 19.81 4.565 19.848 4.535 C 19.946 4.458 20.027 4.363 20.086 4.259 C 20.171 4.111 20.214 3.942 20.211 3.772 L 20.211 0.947 L 20.202 0.819 Z M 18.316 3.247 L 18.316 1.895 L 1.895 1.895 L 1.895 3.247 L 10.104 8.059 L 18.316 3.247 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 4.421)\"/>"
    },
    "IconNormalMegaphoneNameMegaphoneFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.891 12.212 C 3.214 12.298 3.57 12.329 4 12.339 L 4 16.195 C 4 17.658 5.187 18.845 6.65 18.845 C 8.114 18.845 9.3 17.658 9.3 16.195 L 9.3 12.706 L 15.074 14.69 C 15.229 14.744 15.397 14.802 15.545 14.838 C 15.705 14.878 15.953 14.922 16.232 14.854 C 16.581 14.769 16.884 14.553 17.078 14.25 C 17.234 14.008 17.272 13.759 17.287 13.595 C 17.3 13.444 17.3 13.266 17.3 13.101 L 17.3 1.788 C 17.3 1.624 17.3 1.446 17.287 1.294 C 17.272 1.13 17.234 0.881 17.078 0.639 C 16.884 0.337 16.581 0.121 16.232 0.035 C 15.953 -0.033 15.705 0.012 15.545 0.051 C 15.397 0.088 15.229 0.146 15.074 0.199 L 8.25 2.545 L 4.771 2.545 C 3.967 2.544 3.389 2.544 2.891 2.678 C 1.545 3.038 0.494 4.089 0.133 5.435 C -0.001 5.934 0 6.511 0 7.315 L 0 7.574 C 0 8.378 -0.001 8.956 0.133 9.454 C 0.494 10.8 1.545 11.851 2.891 12.212 Z M 8.693 4.296 L 15.5 1.956 L 15.5 12.934 L 8.693 10.594 C 8.418 10.499 8.114 10.544 7.877 10.712 C 7.641 10.881 7.5 11.154 7.5 11.445 L 7.5 16.195 C 7.5 16.665 7.12 17.045 6.65 17.045 C 6.181 17.045 5.8 16.665 5.8 16.195 L 5.8 11.445 C 5.8 10.948 5.397 10.545 4.9 10.545 L 4.8 10.545 C 3.911 10.545 3.625 10.539 3.41 10.487 C 2.642 10.303 2.042 9.703 1.858 8.935 C 1.806 8.72 1.8 8.434 1.8 7.545 L 1.8 7.345 C 1.8 6.456 1.806 6.17 1.858 5.955 C 2.042 5.187 2.642 4.587 3.41 4.403 C 3.625 4.351 3.911 4.345 4.8 4.345 L 8.4 4.345 C 8.5 4.345 8.599 4.329 8.693 4.296 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.600 2.804)\"/><path d=\"M 20.8 4.695 C 20.8 4.198 20.397 3.795 19.9 3.795 C 19.403 3.795 19 4.198 19 4.695 L 19 10.195 C 19 10.692 19.403 11.095 19.9 11.095 C 20.397 11.095 20.8 10.692 20.8 10.195 L 20.8 4.695 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.600 2.804)\"/>"
    },
    "IconNormalMegaphoneNameMegaphoneFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4 12.339 C 3.57 12.329 3.214 12.298 2.891 12.212 C 1.545 11.851 0.494 10.8 0.133 9.454 C -0.001 8.956 0 8.378 0 7.574 L 0 7.315 C 0 6.511 -0.001 5.934 0.133 5.435 C 0.494 4.089 1.545 3.038 2.891 2.678 C 3.389 2.544 3.967 2.544 4.77 2.545 L 8.25 2.545 L 15.074 0.199 C 15.229 0.146 15.397 0.088 15.545 0.051 C 15.705 0.012 15.953 -0.033 16.232 0.035 C 16.581 0.121 16.884 0.337 17.078 0.639 C 17.234 0.881 17.272 1.13 17.286 1.294 C 17.3 1.446 17.3 1.624 17.3 1.788 L 17.3 13.101 C 17.3 13.266 17.3 13.444 17.286 13.595 C 17.272 13.759 17.234 14.008 17.078 14.25 C 16.884 14.553 16.581 14.769 16.232 14.854 C 15.953 14.922 15.705 14.878 15.545 14.838 C 15.397 14.802 15.229 14.744 15.073 14.69 L 9.3 12.706 L 9.3 16.195 C 9.3 17.658 8.114 18.845 6.65 18.845 C 5.186 18.845 4 17.658 4 16.195 L 4 12.339 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.600 2.804)\"/><path d=\"M 20.8 4.695 C 20.8 4.198 20.397 3.795 19.9 3.795 C 19.403 3.795 19 4.198 19 4.695 L 19 10.195 C 19 10.692 19.403 11.095 19.9 11.095 C 20.397 11.095 20.8 10.692 20.8 10.195 L 20.8 4.695 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.600 2.804)\"/>"
    },
    "IconNormalMenu2NameMenuThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.9 0 C 0.403 0 0 0.403 0 0.9 C 0 1.397 0.403 1.8 0.9 1.8 L 16.9 1.8 C 17.397 1.8 17.8 1.397 17.8 0.9 C 17.8 0.403 17.397 0 16.9 0 L 0.9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 4.849)\"/><path d=\"M 0 7.15 C 0 6.653 0.403 6.25 0.9 6.25 L 16.9 6.25 C 17.397 6.25 17.8 6.653 17.8 7.15 C 17.8 7.647 17.397 8.05 16.9 8.05 L 0.9 8.05 C 0.403 8.05 0 7.647 0 7.15 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 4.849)\"/><path d=\"M 0 13.4 C 0 12.903 0.403 12.5 0.9 12.5 L 16.9 12.5 C 17.397 12.5 17.8 12.903 17.8 13.4 C 17.8 13.897 17.397 14.3 16.9 14.3 L 0.9 14.3 C 0.403 14.3 0 13.897 0 13.4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 4.849)\"/>"
    },
    "IconNormalMenu2NameMenuThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.25 0 C 0.56 0 0 0.56 0 1.25 C 0 1.94 0.56 2.5 1.25 2.5 L 17.25 2.5 C 17.94 2.5 18.5 1.94 18.5 1.25 C 18.5 0.56 17.94 0 17.25 0 L 1.25 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.750 4.499)\"/><path d=\"M 0 7.5 C 0 6.81 0.56 6.25 1.25 6.25 L 17.25 6.25 C 17.94 6.25 18.5 6.81 18.5 7.5 C 18.5 8.191 17.94 8.75 17.25 8.75 L 1.25 8.75 C 0.56 8.75 0 8.191 0 7.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.750 4.499)\"/><path d=\"M 0 13.75 C 0 13.06 0.56 12.5 1.25 12.5 L 17.25 12.5 C 17.94 12.5 18.5 13.06 18.5 13.75 C 18.5 14.44 17.94 15 17.25 15 L 1.25 15 C 0.56 15 0 14.44 0 13.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.750 4.499)\"/>"
    },
    "IconNormalMessageNameMessageFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.2 2.626 C 20.096 1.163 18.874 0 17.388 0 L 2.819 0 L 2.618 0.007 C 1.158 0.111 0 1.339 0 2.828 L 0 12.102 L 0.007 12.297 C 0.108 13.79 1.355 15.154 2.842 15.154 L 6.335 15.154 L 6.464 15.146 C 6.926 15.083 7.283 14.686 7.283 14.207 C 7.283 13.684 6.858 13.259 6.335 13.259 L 2.842 13.259 L 2.739 13.249 C 2.326 13.17 1.895 12.633 1.895 12.102 L 1.895 2.828 L 1.903 2.702 C 1.965 2.248 2.356 1.895 2.819 1.895 L 17.388 1.895 L 17.512 1.903 C 17.96 1.966 18.312 2.358 18.312 2.828 L 18.312 12.102 L 18.304 12.237 C 18.239 12.777 17.804 13.259 17.411 13.259 L 12.932 13.259 L 12.8 13.269 C 12.713 13.281 12.627 13.305 12.547 13.341 L 6.874 15.864 L 6.76 15.924 C 6.363 16.17 6.199 16.677 6.394 17.115 L 6.454 17.229 C 6.699 17.626 7.206 17.79 7.644 17.596 L 13.134 15.153 L 17.411 15.154 L 17.604 15.147 C 19.065 15.031 20.207 13.608 20.207 12.102 L 20.207 2.828 L 20.2 2.626 Z M 6.312 8.836 C 7.009 8.836 7.575 8.271 7.575 7.573 C 7.575 6.874 7.009 6.31 6.312 6.31 C 5.614 6.31 5.049 6.874 5.049 7.573 C 5.049 8.271 5.614 8.836 6.312 8.836 Z M 10.101 8.836 C 10.799 8.836 11.364 8.271 11.364 7.573 C 11.364 6.874 10.799 6.31 10.101 6.31 C 9.404 6.31 8.838 6.874 8.838 7.573 C 8.838 8.271 9.404 8.836 10.101 8.836 Z M 13.891 8.836 C 14.588 8.836 15.154 8.271 15.154 7.573 C 15.154 6.874 14.588 6.31 13.891 6.31 C 13.193 6.31 12.628 6.874 12.628 7.573 C 12.628 8.271 13.193 8.836 13.891 8.836 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.899 3.164)\"/>"
    },
    "IconNormalMessageNameMessageFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.819 0 L 17.388 0 C 18.941 0 20.207 1.271 20.207 2.828 L 20.207 12.102 C 20.207 13.674 18.964 15.154 17.411 15.154 L 13.134 15.153 L 7.644 17.596 C 7.057 17.857 6.4 17.47 6.32 16.856 L 6.312 16.73 L 6.311 15.153 L 2.842 15.154 C 1.355 15.154 0.108 13.79 0.007 12.297 L 0 12.102 L 0 2.828 C 0 1.271 1.265 0 2.819 0 Z M 3.785 7.573 C 3.785 8.271 4.351 8.836 5.049 8.836 C 5.746 8.836 6.312 8.271 6.312 7.573 C 6.312 6.874 5.746 6.31 5.049 6.31 C 4.351 6.31 3.785 6.874 3.785 7.573 Z M 8.838 7.573 C 8.838 8.271 9.404 8.836 10.101 8.836 C 10.799 8.836 11.364 8.271 11.364 7.573 C 11.364 6.874 10.799 6.31 10.101 6.31 C 9.404 6.31 8.838 6.874 8.838 7.573 Z M 15.154 8.836 C 14.457 8.836 13.891 8.271 13.891 7.573 C 13.891 6.874 14.457 6.31 15.154 6.31 C 15.851 6.31 16.417 6.874 16.417 7.573 C 16.417 8.271 15.851 8.836 15.154 8.836 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.899 3.164)\"/>"
    },
    "IconNormalMinusNameMinusThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 0.9 C 0 0.403 0.403 0 0.9 0 L 16.9 0 C 17.397 0 17.8 0.403 17.8 0.9 C 17.8 1.397 17.397 1.8 16.9 1.8 L 0.9 1.8 C 0.403 1.8 0 1.397 0 0.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 11.100)\"/>"
    },
    "IconNormalMinusNameMinusThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 1.3 C 0 0.582 0.582 0 1.3 0 L 17.3 0 C 18.018 0 18.6 0.582 18.6 1.3 C 18.6 2.018 18.018 2.6 17.3 2.6 L 1.3 2.6 C 0.582 2.6 0 2.018 0 1.3 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.700 10.699)\"/>"
    },
    "IconNormalMoreHorizontalNameMoreHorizontal": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 1.895 3.789 C 2.941 3.789 3.789 2.941 3.789 1.895 C 3.789 0.849 2.941 0 1.895 0 C 0.849 0 0 0.849 0 1.895 C 0 2.941 0.849 3.789 1.895 3.789 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.789 10.105)\"/><path d=\"M 10.105 1.895 C 10.105 2.941 9.256 3.789 8.211 3.789 C 7.165 3.789 6.316 2.941 6.316 1.895 C 6.316 0.849 7.165 0 8.211 0 C 9.256 0 10.105 0.849 10.105 1.895 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.789 10.105)\"/><path d=\"M 16.484 1.895 C 16.484 2.941 15.635 3.789 14.59 3.789 C 13.544 3.789 12.695 2.941 12.695 1.895 C 12.695 0.849 13.544 0 14.59 0 C 15.635 0 16.484 0.849 16.484 1.895 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.789 10.105)\"/>"
    },
    "IconNormalMoreVertical2NameMoreVerticalTightFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 3.5 15.25 C 3.5 14.284 2.716 13.5 1.75 13.5 C 0.783 13.5 0 14.284 0 15.25 C 0 16.216 0.783 17 1.75 17 C 2.716 17 3.5 16.216 3.5 15.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10.250 3.500)\"/><path d=\"M 1.75 6.75 C 2.716 6.75 3.5 7.534 3.5 8.5 C 3.5 9.466 2.716 10.25 1.75 10.25 C 0.783 10.25 0 9.466 0 8.5 C 0 7.534 0.783 6.75 1.75 6.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10.250 3.500)\"/><path d=\"M 1.75 0 C 2.716 0 3.5 0.784 3.5 1.75 C 3.5 2.716 2.716 3.5 1.75 3.5 C 0.783 3.5 0 2.716 0 1.75 C 0 0.784 0.783 0 1.75 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 10.250 3.500)\"/>"
    },
    "IconNormalMoreVertical2NameMoreVerticalTightTightTrue": {
      viewBox: "0 0 12 24",
      body: "<path d=\"M 3.5 15.25 C 3.5 14.284 2.717 13.5 1.75 13.5 C 0.784 13.5 0 14.284 0 15.25 C 0 16.216 0.784 17 1.75 17 C 2.717 17 3.5 16.216 3.5 15.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.250 3.500)\"/><path d=\"M 1.75 6.75 C 2.717 6.75 3.5 7.534 3.5 8.5 C 3.5 9.466 2.717 10.25 1.75 10.25 C 0.784 10.25 0 9.466 0 8.5 C 0 7.534 0.784 6.75 1.75 6.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.250 3.500)\"/><path d=\"M 1.75 0 C 2.717 0 3.5 0.784 3.5 1.75 C 3.5 2.716 2.717 3.5 1.75 3.5 C 0.784 3.5 0 2.716 0 1.75 C 0 0.784 0.784 0 1.75 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.250 3.500)\"/>"
    },
    "IconNormalPauseNamePause": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.947 0 C 0.424 0 0 0.424 0 0.947 L 0 14.211 C 0 14.734 0.424 15.158 0.947 15.158 C 1.471 15.158 1.895 14.734 1.895 14.211 L 1.895 0.947 C 1.895 0.424 1.471 0 0.947 0 Z M 7.895 0 C 7.372 0 6.947 0.424 6.947 0.947 L 6.947 14.211 C 6.947 14.734 7.372 15.158 7.895 15.158 C 8.418 15.158 8.842 14.734 8.842 14.211 L 8.842 0.947 C 8.842 0.424 8.418 0 7.895 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 7.579 4.421)\"/>"
    },
    "IconNormalPencil2NamePencilFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.889 0.868 C 14.045 -0.289 15.921 -0.289 17.078 0.868 C 18.235 2.025 18.235 3.9 17.078 5.057 L 4.453 17.682 C 4.284 17.851 4.055 17.946 3.817 17.946 L 0.9 17.946 C 0.403 17.946 0 17.543 0 17.046 L 0 14.129 C 0 13.89 0.095 13.661 0.264 13.493 L 12.889 0.868 Z M 15.805 2.14 C 15.351 1.687 14.615 1.687 14.161 2.14 L 1.8 14.502 L 1.8 16.146 L 3.444 16.146 L 15.805 3.784 C 16.259 3.33 16.259 2.594 15.805 2.14 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.100 2.954)\"/>"
    },
    "IconNormalPencil2NamePencilFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 17.078 0.868 C 15.921 -0.289 14.045 -0.289 12.889 0.868 L 0.264 13.493 C 0.095 13.661 0 13.89 0 14.129 L 0 17.046 C 0 17.543 0.403 17.946 0.9 17.946 L 3.817 17.946 C 4.055 17.946 4.284 17.851 4.453 17.682 L 17.078 5.057 C 18.235 3.9 18.235 2.025 17.078 0.868 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 2.954)\"/>"
    },
    "IconNormalPersonPlus2NamePersonPlusFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4 4.9 C 4 2.194 6.194 0 8.9 0 C 11.606 0 13.8 2.194 13.8 4.9 C 13.8 7.606 11.606 9.8 8.9 9.8 C 6.194 9.8 4 7.606 4 4.9 Z M 8.9 1.8 C 7.188 1.8 5.8 3.188 5.8 4.9 C 5.8 6.612 7.188 8 8.9 8 C 10.612 8 12 6.612 12 4.9 C 12 3.188 10.612 1.8 8.9 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.100 2.601)\"/><path d=\"M 2.816 12.321 C 4.431 11.451 6.588 10.998 8.9 10.998 C 11.212 10.998 13.369 11.451 14.984 12.321 C 16.597 13.189 17.8 14.565 17.8 16.398 L 17.8 16.725 C 17.8 16.912 17.8 17.102 17.787 17.264 C 17.772 17.445 17.736 17.669 17.62 17.898 C 17.462 18.208 17.21 18.46 16.899 18.619 C 16.671 18.735 16.447 18.771 16.266 18.785 C 16.103 18.799 15.913 18.799 15.727 18.799 L 2.073 18.799 C 1.887 18.799 1.697 18.799 1.534 18.786 C 1.353 18.771 1.129 18.736 0.901 18.62 C 0.59 18.461 0.338 18.209 0.18 17.898 C 0.064 17.67 0.028 17.446 0.013 17.265 C 0 17.103 0 16.913 0 16.726 L 0 16.398 C 0 14.565 1.203 13.189 2.816 12.321 Z M 3.67 13.905 C 2.388 14.596 1.8 15.471 1.8 16.398 L 1.802 16.998 L 15.998 16.997 L 16 16.398 C 16 15.471 15.412 14.596 14.13 13.905 C 12.849 13.215 11.006 12.798 8.9 12.798 C 6.794 12.798 4.951 13.215 3.67 13.905 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.100 2.601)\"/><path d=\"M 18.3 5.899 C 18.3 5.402 17.897 4.999 17.4 4.999 C 16.903 4.999 16.5 5.402 16.5 5.899 L 16.5 7.499 L 14.9 7.499 C 14.403 7.499 14 7.902 14 8.399 C 14 8.896 14.403 9.299 14.9 9.299 L 16.5 9.299 L 16.5 10.899 C 16.5 11.396 16.903 11.799 17.4 11.799 C 17.897 11.799 18.3 11.396 18.3 10.899 L 18.3 9.299 L 19.9 9.299 C 20.397 9.299 20.8 8.896 20.8 8.399 C 20.8 7.902 20.397 7.499 19.9 7.499 L 18.3 7.499 L 18.3 5.899 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 2.601)\"/>"
    },
    "IconNormalPersonPlus2NamePersonPlusFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.9 0 C 6.47 0 4.5 1.97 4.5 4.4 C 4.5 6.83 6.47 8.8 8.9 8.8 C 11.33 8.8 13.3 6.83 13.3 4.4 C 13.3 1.97 11.33 0 8.9 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 2.853)\"/><path d=\"M 2.816 12.068 C 4.431 11.199 6.588 10.746 8.9 10.746 C 11.212 10.746 13.369 11.199 14.984 12.068 C 16.597 12.937 17.8 14.312 17.8 16.146 L 17.8 16.473 C 17.8 16.66 17.8 16.85 17.787 17.012 C 17.772 17.193 17.736 17.417 17.62 17.645 C 17.462 17.956 17.21 18.208 16.899 18.366 C 16.671 18.483 16.447 18.518 16.266 18.533 C 16.103 18.546 15.913 18.546 15.727 18.546 L 2.073 18.547 C 1.887 18.547 1.697 18.547 1.534 18.534 C 1.353 18.519 1.129 18.484 0.901 18.367 C 0.59 18.209 0.338 17.957 0.18 17.646 C 0.064 17.418 0.028 17.194 0.013 17.013 C 0 16.85 0 16.66 0 16.474 L 0 16.146 C 0 14.312 1.203 12.937 2.816 12.068 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 2.853)\"/><path d=\"M 18.3 5.647 C 18.3 5.15 17.897 4.747 17.4 4.747 C 16.903 4.747 16.5 5.15 16.5 5.647 L 16.5 7.247 L 14.9 7.247 C 14.403 7.247 14 7.65 14 8.147 C 14 8.645 14.403 9.047 14.9 9.047 L 16.5 9.047 L 16.5 10.647 C 16.5 11.145 16.903 11.547 17.4 11.547 C 17.897 11.547 18.3 11.145 18.3 10.647 L 18.3 9.047 L 19.9 9.047 C 20.397 9.047 20.8 8.645 20.8 8.147 C 20.8 7.65 20.397 7.247 19.9 7.247 L 18.3 7.247 L 18.3 5.647 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 2.853)\"/>"
    },
    "IconNormalPersonsNamePersonsFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 3.9 C 10 1.746 11.746 0 13.9 0 C 16.054 0 17.8 1.746 17.8 3.9 C 17.8 6.054 16.054 7.8 13.9 7.8 C 11.746 7.8 10 6.054 10 3.9 Z M 13.9 1.8 C 12.741 1.8 11.8 2.74 11.8 3.9 C 11.8 5.06 12.741 6 13.9 6 C 15.06 6 16 5.06 16 3.9 C 16 2.74 15.06 1.8 13.9 1.8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 8.479 10.347 C 9.922 9.459 11.846 8.999 13.9 8.999 C 15.954 8.999 17.879 9.459 19.322 10.347 C 20.779 11.244 21.8 12.626 21.8 14.399 L 21.8 14.726 C 21.8 14.913 21.8 15.103 21.787 15.265 C 21.772 15.446 21.737 15.67 21.62 15.899 C 21.462 16.209 21.21 16.461 20.899 16.62 C 20.671 16.736 20.447 16.772 20.266 16.786 C 20.104 16.8 19.914 16.8 19.727 16.8 L 8.074 16.8 C 7.887 16.8 7.697 16.8 7.535 16.787 C 7.354 16.772 7.13 16.737 6.901 16.621 C 6.591 16.462 6.338 16.21 6.18 15.899 C 6.064 15.671 6.028 15.447 6.013 15.266 C 6 15.104 6 14.914 6 14.727 L 6 14.399 C 6 12.626 7.022 11.244 8.479 10.347 Z M 9.422 11.88 C 8.346 12.543 7.8 13.411 7.8 14.399 L 7.802 14.999 L 19.998 14.998 L 20 14.399 C 20 13.411 19.455 12.543 18.378 11.88 C 17.288 11.209 15.712 10.799 13.9 10.799 C 12.088 10.799 10.513 11.209 9.422 11.88 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 1.875 11.531 C 2.893 10.87 4.208 10.546 5.59 10.504 C 5.136 11.066 4.767 11.706 4.523 12.42 C 3.859 12.543 3.292 12.757 2.855 13.041 C 2.172 13.484 1.8 14.091 1.8 14.899 L 1.8 14.999 L 4.202 14.999 C 4.203 15.13 4.208 15.275 4.219 15.413 C 4.243 15.705 4.309 16.192 4.576 16.717 C 4.59 16.744 4.605 16.772 4.62 16.799 L 1.901 16.799 L 1.85 16.799 C 1.677 16.8 1.439 16.801 1.222 16.743 C 0.654 16.59 0.209 16.146 0.057 15.577 C -0.001 15.36 -0.001 15.123 0 14.95 L 0 14.899 C 0 13.406 0.748 12.263 1.875 11.531 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 5.4 3 C 3.799 3 2.5 4.298 2.5 5.9 C 2.5 7.502 3.799 8.8 5.4 8.8 C 7.002 8.8 8.3 7.502 8.3 5.9 C 8.3 4.298 7.002 3 5.4 3 Z M 4.3 5.9 C 4.3 5.292 4.793 4.8 5.4 4.8 C 6.008 4.8 6.5 5.292 6.5 5.9 C 6.5 6.507 6.008 7 5.4 7 C 4.793 7 4.3 6.507 4.3 5.9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/>"
    },
    "IconNormalPersonsNamePersonsFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10 3.9 C 10 1.746 11.746 0 13.9 0 C 16.054 0 17.8 1.746 17.8 3.9 C 17.8 6.054 16.054 7.8 13.9 7.8 C 11.746 7.8 10 6.054 10 3.9 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 13.9 9.499 C 11.846 9.499 9.921 9.959 8.478 10.847 C 7.022 11.744 6 13.126 6 14.899 L 6 14.951 C 5.999 15.124 5.998 15.362 6.057 15.579 C 6.209 16.147 6.653 16.591 7.221 16.744 C 7.439 16.802 7.677 16.801 7.85 16.8 L 7.901 16.8 L 19.9 16.8 L 19.951 16.8 C 20.124 16.8 20.361 16.801 20.577 16.743 C 21.146 16.591 21.591 16.146 21.744 15.577 C 21.802 15.36 21.801 15.123 21.8 14.951 L 21.8 14.899 C 21.8 13.126 20.778 11.744 19.321 10.847 C 17.878 9.959 15.954 9.499 13.9 9.499 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 1.874 12.031 C 2.893 11.37 4.208 11.046 5.59 11.004 C 4.749 12.044 4.2 13.351 4.2 14.899 L 4.2 14.922 C 4.197 15.046 4.188 15.561 4.318 16.046 C 4.39 16.312 4.491 16.564 4.619 16.799 L 1.401 16.799 C 0.627 16.799 0 16.172 0 15.399 C 0 13.906 0.747 12.763 1.874 12.031 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/><path d=\"M 5.4 3 C 3.798 3 2.5 4.298 2.5 5.9 C 2.5 7.502 3.798 8.8 5.4 8.8 C 7.002 8.8 8.3 7.502 8.3 5.9 C 8.3 4.298 7.002 3 5.4 3 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.100 4.100)\"/>"
    },
    "IconNormalPhoneNamePhoneFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.889 19.569 C 11.705 19.127 8.372 17.904 5.063 14.595 C 1.754 11.286 0.531 7.952 0.088 5.768 C -0.279 3.955 0.543 2.286 1.707 1.121 L 1.979 0.849 C 3.246 -0.418 5.348 -0.244 6.389 1.215 L 7.814 3.209 C 8.496 4.164 8.388 5.472 7.558 6.301 L 6.729 7.13 C 6.981 7.736 7.625 8.955 9.164 10.494 C 10.702 12.032 11.921 12.677 12.527 12.928 L 13.356 12.099 C 14.186 11.27 15.494 11.162 16.448 11.843 L 18.443 13.268 C 19.901 14.31 20.075 16.411 18.808 17.679 L 18.536 17.951 C 17.372 19.115 15.702 19.936 13.889 19.569 Z M 6.335 13.322 C 9.358 16.344 12.355 17.422 14.247 17.805 C 15.283 18.015 16.372 17.569 17.263 16.678 L 17.535 16.406 C 18.016 15.925 17.95 15.128 17.397 14.733 L 15.402 13.308 C 15.164 13.138 14.837 13.165 14.629 13.372 L 13.785 14.217 C 13.343 14.659 12.634 14.909 11.93 14.629 C 11.119 14.306 9.66 13.535 7.891 11.767 C 6.122 9.998 5.352 8.539 5.029 7.728 C 4.749 7.024 4.999 6.315 5.441 5.873 L 6.285 5.028 C 6.493 4.821 6.52 4.494 6.349 4.255 L 4.925 2.261 C 4.53 1.708 3.732 1.642 3.252 2.122 L 2.98 2.394 C 2.089 3.286 1.643 4.375 1.853 5.411 C 2.236 7.302 3.313 10.3 6.335 13.322 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.119 1.227)\"/>"
    },
    "IconNormalPhoneNamePhoneFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.063 14.595 C 8.372 17.904 11.705 19.127 13.889 19.569 C 15.702 19.936 17.372 19.115 18.536 17.951 L 18.808 17.679 C 20.075 16.411 19.901 14.31 18.443 13.268 L 16.448 11.843 C 15.494 11.162 14.186 11.27 13.356 12.099 L 12.527 12.928 C 11.921 12.677 10.702 12.032 9.164 10.494 C 7.625 8.955 6.981 7.736 6.729 7.13 L 7.558 6.301 C 8.388 5.472 8.496 4.164 7.814 3.209 L 6.389 1.215 C 5.348 -0.244 3.246 -0.418 1.979 0.849 L 1.707 1.121 C 0.543 2.286 -0.279 3.955 0.088 5.768 C 0.531 7.952 1.754 11.286 5.063 14.595 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.119 1.227)\"/>"
    },
    "IconNormalPin2NamePinFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.267 0 C 3.85 0 3.478 0 3.179 0.027 C 2.874 0.055 2.498 0.121 2.168 0.359 C 1.734 0.672 1.452 1.155 1.391 1.687 C 1.346 2.092 1.473 2.451 1.598 2.73 C 1.721 3.005 1.903 3.329 2.108 3.692 L 2.919 5.135 L 2.919 8.083 L 1.171 10.269 C 0.86 10.658 0.588 10.997 0.399 11.283 C 0.214 11.563 0 11.943 0 12.397 C -0.001 12.976 0.262 13.523 0.715 13.884 C 1.069 14.167 1.499 14.238 1.834 14.268 C 2.176 14.299 2.61 14.299 3.107 14.299 L 6.419 14.299 L 6.419 19.399 C 6.419 19.896 6.822 20.299 7.319 20.299 C 7.816 20.299 8.219 19.896 8.219 19.399 L 8.219 14.299 L 11.531 14.299 C 12.029 14.299 12.463 14.299 12.805 14.268 C 13.139 14.238 13.57 14.167 13.924 13.884 C 14.376 13.523 14.639 12.976 14.639 12.397 C 14.638 11.943 14.425 11.563 14.24 11.283 C 14.05 10.997 13.779 10.658 13.468 10.269 L 11.719 8.083 L 11.719 5.135 L 12.531 3.692 C 12.735 3.329 12.918 3.005 13.041 2.73 C 13.166 2.451 13.293 2.092 13.247 1.687 C 13.187 1.155 12.905 0.672 12.471 0.359 C 12.141 0.121 11.765 0.055 11.46 0.027 C 11.161 0 10.789 0 10.372 0 L 4.267 0 Z M 3.192 1.949 C 3.18 1.926 3.178 1.911 3.178 1.899 C 3.178 1.885 3.183 1.867 3.193 1.849 C 3.204 1.832 3.217 1.819 3.229 1.812 C 3.239 1.806 3.254 1.8 3.279 1.8 L 11.359 1.8 C 11.385 1.8 11.4 1.806 11.41 1.812 C 11.422 1.819 11.435 1.832 11.446 1.849 C 11.456 1.867 11.46 1.885 11.461 1.899 C 11.461 1.911 11.459 1.926 11.446 1.949 L 10.035 4.458 C 9.959 4.592 9.919 4.744 9.919 4.899 L 9.919 8.399 C 9.919 8.603 9.989 8.801 10.117 8.961 L 12.817 12.336 C 12.836 12.36 12.839 12.377 12.84 12.387 C 12.842 12.401 12.839 12.421 12.829 12.442 C 12.819 12.464 12.805 12.478 12.793 12.486 C 12.784 12.491 12.77 12.499 12.739 12.499 L 1.9 12.499 C 1.869 12.499 1.855 12.491 1.846 12.486 C 1.834 12.478 1.82 12.464 1.81 12.442 C 1.8 12.421 1.797 12.401 1.798 12.387 C 1.799 12.377 1.803 12.36 1.822 12.336 L 4.522 8.961 C 4.65 8.801 4.719 8.603 4.719 8.399 L 4.719 4.899 C 4.719 4.744 4.68 4.592 4.604 4.458 L 3.192 1.949 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 4.681 2.602)\"/>"
    },
    "IconNormalPin2NamePinFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.267 0 L 10.372 0 C 10.788 0 11.161 0 11.46 0.027 C 11.765 0.055 12.141 0.121 12.471 0.359 C 12.905 0.672 13.187 1.155 13.247 1.687 C 13.293 2.092 13.166 2.451 13.041 2.73 C 12.918 3.005 12.735 3.329 12.531 3.692 L 11.719 5.135 L 11.719 8.083 L 13.468 10.269 C 13.779 10.658 14.05 10.997 14.239 11.283 C 14.425 11.563 14.638 11.943 14.639 12.397 C 14.639 12.976 14.376 13.523 13.924 13.884 C 13.57 14.167 13.139 14.238 12.805 14.268 C 12.463 14.299 12.029 14.299 11.531 14.299 L 8.219 14.299 L 8.219 19.399 C 8.219 19.896 7.816 20.299 7.319 20.299 C 6.822 20.299 6.419 19.896 6.419 19.399 L 6.419 14.299 L 3.107 14.299 C 2.61 14.299 2.176 14.299 1.834 14.268 C 1.499 14.238 1.069 14.167 0.715 13.884 C 0.262 13.523 -0.001 12.976 0 12.397 C 0 11.943 0.214 11.563 0.399 11.283 C 0.588 10.997 0.86 10.658 1.171 10.269 L 2.919 8.083 L 2.919 5.135 L 2.108 3.692 C 1.903 3.329 1.721 3.005 1.598 2.73 C 1.473 2.451 1.346 2.092 1.391 1.687 C 1.452 1.155 1.734 0.672 2.168 0.359 C 2.498 0.121 2.874 0.055 3.179 0.027 C 3.478 0 3.85 0 4.267 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.681 2.602)\"/>"
    },
    "IconNormalPlayNamePlay": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.222 1.138 C 7.098 -0.379 9.289 -0.379 10.165 1.138 L 16.079 11.381 C 16.955 12.899 15.86 14.796 14.107 14.796 L 2.28 14.796 C 0.527 14.796 -0.568 12.899 0.308 11.381 L 6.222 1.138 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(0 1 -1 0 19.796 4)\"/>"
    },
    "IconNormalPlusNamePlusThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.781 0.819 C 9.718 0.356 9.322 0 8.842 0 C 8.319 0 7.895 0.424 7.895 0.947 L 7.895 7.895 L 0.947 7.895 L 0.819 7.903 C 0.356 7.966 0 8.362 0 8.842 C 0 9.365 0.424 9.789 0.947 9.789 L 7.895 9.789 L 7.895 16.737 L 7.903 16.865 C 7.966 17.328 8.363 17.684 8.842 17.684 C 9.365 17.684 9.79 17.26 9.79 16.737 L 9.79 9.789 L 16.737 9.789 L 16.865 9.781 C 17.328 9.718 17.684 9.322 17.684 8.842 C 17.684 8.319 17.26 7.895 16.737 7.895 L 9.79 7.895 L 9.79 0.947 L 9.781 0.819 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 3.158)\"/>"
    },
    "IconNormalPlusNamePlusThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.421 1.263 C 10.421 0.566 9.856 0 9.158 0 C 8.46 0 7.895 0.566 7.895 1.263 L 7.895 7.895 L 1.263 7.895 C 0.566 7.895 0 8.46 0 9.158 C 0 9.856 0.566 10.421 1.263 10.421 L 7.895 10.421 L 7.895 17.053 C 7.895 17.75 8.46 18.316 9.158 18.316 C 9.856 18.316 10.421 17.75 10.421 17.053 L 10.421 10.421 L 17.053 10.421 C 17.75 10.421 18.316 9.856 18.316 9.158 C 18.316 8.46 17.75 7.895 17.053 7.895 L 10.421 7.895 L 10.421 1.263 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0) matrix(1 0 0 1 2.842 2.842)\"/>"
    },
    "IconNormalRefreshNameRefresh": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.469 0.495 C 13.218 0.035 12.643 -0.135 12.184 0.115 L 8.389 2.18 L 8.274 2.254 C 8.016 2.447 7.88 2.753 7.896 3.061 C 7.895 3.076 7.895 3.091 7.895 3.105 C 7.895 3.412 8.041 3.685 8.267 3.859 L 10.544 7.277 L 10.63 7.388 C 10.939 7.731 11.462 7.804 11.857 7.541 L 11.968 7.455 C 12.311 7.145 12.385 6.623 12.121 6.227 L 10.874 4.355 C 13.72 5.224 15.79 7.87 15.79 11 C 15.79 14.837 12.679 17.947 8.842 17.947 C 6.973 17.947 5.224 17.208 3.929 15.913 C 2.634 14.618 1.895 12.869 1.895 11 C 1.895 9.132 2.634 7.383 3.93 6.087 C 4.299 5.717 4.299 5.117 3.929 4.747 C 3.559 4.377 2.959 4.378 2.589 4.748 C 0.943 6.396 0 8.625 0 11 C 0 13.377 0.943 15.606 2.59 17.253 C 4.236 18.9 6.466 19.842 8.842 19.842 C 13.726 19.842 17.684 15.883 17.684 11 C 17.684 7.077 15.129 3.751 11.593 2.594 L 13.089 1.78 L 13.198 1.711 C 13.574 1.435 13.698 0.916 13.469 0.495 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(-1 0 0 1 20.842 2.263)\"/>"
    },
    "IconNormalSearchNameSearchThickFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.579 0 C 11.765 0 15.158 3.393 15.158 7.579 C 15.158 8.358 15.039 9.125 14.809 9.857 C 14.652 10.356 14.12 10.633 13.621 10.476 C 13.122 10.319 12.845 9.787 13.002 9.288 C 13.174 8.74 13.263 8.165 13.263 7.579 C 13.263 4.439 10.718 1.895 7.579 1.895 C 4.44 1.895 1.895 4.439 1.895 7.579 C 1.895 10.718 4.44 13.263 7.579 13.263 C 9.111 13.263 10.568 12.656 11.619 11.61 C 11.956 11.275 12.481 11.245 12.852 11.52 L 12.958 11.612 L 19.933 18.594 C 20.303 18.964 20.303 19.564 19.933 19.933 C 19.596 20.27 19.07 20.3 18.699 20.025 L 18.593 19.933 L 12.241 13.575 L 12.165 13.636 C 10.957 14.541 9.483 15.077 7.937 15.15 L 7.579 15.158 C 3.393 15.158 0 11.764 0 7.579 C 0 3.393 3.393 0 7.579 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 1.895)\"/>"
    },
    "IconNormalSearchNameSearchThickThickTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.579 0 C 11.765 0 15.158 3.393 15.158 7.579 C 15.158 9.216 14.639 10.731 13.757 11.97 L 19.841 18.054 C 20.334 18.548 20.334 19.347 19.841 19.841 C 19.385 20.296 18.669 20.331 18.173 19.946 L 18.054 19.841 L 11.971 13.757 C 10.732 14.639 9.216 15.158 7.579 15.158 C 3.393 15.158 0 11.765 0 7.579 C 0 3.393 3.393 0 7.579 0 Z M 7.579 2.526 C 4.788 2.526 2.526 4.788 2.526 7.579 C 2.526 10.369 4.788 12.632 7.579 12.632 C 10.369 12.632 12.632 10.369 12.632 7.579 C 12.632 4.788 10.369 2.526 7.579 2.526 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 1.895)\"/>"
    },
    "IconNormalSendNameSendFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 19.581 0.036 C 20.176 -0.13 20.755 0.306 20.782 0.902 L 20.78 1.031 L 19.359 17.137 C 19.301 17.794 18.614 18.179 18.034 17.921 L 17.92 17.861 L 11.647 14.014 L 8.213 17.699 C 7.658 18.295 6.682 17.954 6.581 17.185 L 6.573 17.053 L 6.573 12.79 C 6.573 12.267 6.997 11.843 7.52 11.843 C 8 11.843 8.396 12.199 8.459 12.662 L 8.467 12.79 L 8.467 14.646 L 10.789 12.156 C 11.062 11.863 11.485 11.777 11.846 11.927 L 11.977 11.994 L 17.605 15.444 L 18.771 2.228 L 3.222 6.567 L 7.487 9.339 L 12.675 5.846 C 13.07 5.581 13.592 5.652 13.903 5.993 L 13.99 6.103 C 14.256 6.498 14.185 7.02 13.844 7.331 L 13.734 7.418 L 8.022 11.264 C 7.652 11.513 7.207 11.46 6.902 11.219 L 0.431 7.012 C -0.212 6.594 -0.108 5.645 0.561 5.352 L 0.693 5.305 L 19.581 0.036 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.579 2.999)\"/>"
    },
    "IconNormalSendNameSendFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 6.567 12.063 C 6.563 11.725 6.731 11.407 7.012 11.219 L 13.362 6.986 C 14.15 6.461 13.362 5.279 12.573 5.804 L 6.487 9.862 C 6.154 10.083 5.722 10.086 5.387 9.868 L 0.324 6.577 C -0.189 6.243 -0.069 5.461 0.52 5.296 L 19.408 0.027 C 19.886 -0.107 20.35 0.279 20.307 0.774 L 18.886 16.879 C 18.839 17.404 18.256 17.698 17.806 17.422 L 11.369 13.474 L 7.803 17.301 C 7.363 17.773 6.573 17.461 6.573 16.816 L 6.573 12.557 L 6.567 12.063 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.579 3.236)\"/>"
    },
    "IconNormalSettingNameSetting": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.924 2.295 C 12.831 1.014 11.771 0 10.473 0 L 8.476 0 L 8.292 0.007 C 7.018 0.102 6.017 1.175 6.017 2.482 L 6.007 2.588 C 5.975 2.76 5.864 2.912 5.7 3.001 C 5.655 3.025 5.609 3.05 5.563 3.077 L 5.271 3.251 C 5.084 3.368 4.867 3.374 4.693 3.272 C 3.512 2.582 2.003 2.991 1.325 4.181 L 0.327 5.934 L 0.234 6.113 C -0.305 7.265 0.112 8.661 1.225 9.313 L 1.526 9.489 L 1.506 9.801 L 1.499 10.105 L 1.506 10.409 L 1.525 10.72 L 1.225 10.897 L 1.055 11.006 C 0.016 11.734 -0.313 13.154 0.327 14.277 L 1.325 16.029 L 1.433 16.202 C 2.154 17.257 3.572 17.595 4.692 16.938 C 4.866 16.837 5.084 16.843 5.27 16.959 C 5.412 17.048 5.557 17.132 5.702 17.211 C 5.897 17.316 6.017 17.514 6.017 17.731 L 6.023 17.915 C 6.117 19.196 7.177 20.211 8.476 20.211 L 10.473 20.211 L 10.656 20.204 C 11.931 20.109 12.931 19.035 12.931 17.729 L 12.941 17.623 C 12.973 17.451 13.084 17.299 13.248 17.21 C 13.394 17.131 13.54 17.046 13.684 16.954 C 13.864 16.843 14.083 16.837 14.257 16.939 C 15.436 17.629 16.945 17.219 17.623 16.029 L 18.621 14.277 L 18.677 14.161 C 18.851 13.728 18.682 13.222 18.266 12.985 C 17.811 12.726 17.232 12.885 16.974 13.34 L 15.977 15.092 L 15.91 15.186 C 15.736 15.386 15.447 15.44 15.214 15.303 C 14.425 14.842 13.453 14.867 12.676 15.35 C 12.563 15.422 12.456 15.484 12.349 15.542 C 11.542 15.978 11.036 16.814 11.036 17.731 L 11.027 17.837 C 10.979 18.111 10.747 18.316 10.473 18.316 L 8.476 18.316 L 8.375 18.306 C 8.114 18.257 7.911 18.02 7.911 17.729 L 7.902 17.519 C 7.832 16.687 7.344 15.944 6.601 15.543 C 6.494 15.485 6.386 15.422 6.276 15.353 C 5.496 14.867 4.524 14.842 3.735 15.303 C 3.468 15.459 3.129 15.367 2.971 15.091 L 1.974 13.339 L 1.929 13.242 C 1.836 12.978 1.939 12.675 2.182 12.533 L 3.02 12.042 L 3.139 11.96 C 3.397 11.751 3.53 11.417 3.478 11.081 C 3.422 10.714 3.394 10.402 3.394 10.105 C 3.394 9.808 3.422 9.496 3.478 9.131 C 3.537 8.747 3.356 8.366 3.021 8.17 L 2.183 7.678 L 2.098 7.618 C 1.89 7.438 1.83 7.123 1.973 6.872 L 2.972 5.119 L 3.039 5.024 C 3.213 4.824 3.502 4.771 3.736 4.907 C 4.524 5.369 5.497 5.345 6.274 4.859 C 6.314 4.834 6.353 4.81 6.39 4.788 L 6.781 4.561 C 7.481 4.104 7.911 3.327 7.911 2.48 L 7.921 2.374 C 7.969 2.1 8.202 1.895 8.476 1.895 L 10.473 1.895 L 10.573 1.904 C 10.834 1.953 11.036 2.19 11.036 2.482 L 11.045 2.692 C 11.116 3.524 11.604 4.266 12.347 4.668 L 12.559 4.788 L 12.673 4.859 C 13.452 5.345 14.425 5.369 15.213 4.907 C 15.48 4.751 15.82 4.843 15.977 5.119 L 16.974 6.871 L 17.018 6.968 C 17.112 7.233 17.009 7.536 16.766 7.678 L 15.928 8.17 L 15.809 8.252 C 15.551 8.461 15.419 8.795 15.47 9.131 C 15.526 9.491 15.554 9.805 15.554 10.105 C 15.554 10.405 15.526 10.719 15.47 11.081 C 15.411 11.465 15.593 11.845 15.927 12.042 L 16.418 12.33 L 16.534 12.387 C 16.964 12.567 17.472 12.406 17.715 11.992 L 17.772 11.877 C 17.936 11.485 17.817 11.03 17.483 10.768 L 17.42 10.725 L 17.442 10.41 L 17.448 10.105 C 17.448 9.902 17.439 9.699 17.422 9.49 L 17.724 9.313 L 17.894 9.204 C 18.933 8.476 19.26 7.056 18.62 5.933 L 17.624 4.182 L 17.516 4.009 C 16.795 2.953 15.377 2.616 14.256 3.272 C 14.082 3.374 13.864 3.368 13.678 3.252 C 13.528 3.158 13.386 3.075 13.247 3 C 13.051 2.894 12.931 2.696 12.931 2.48 L 12.924 2.295 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/><path d=\"M 9.474 5.684 L 9.716 5.691 C 12.045 5.817 13.895 7.745 13.895 10.105 C 13.895 12.547 11.915 14.526 9.474 14.526 C 7.032 14.526 5.053 12.547 5.053 10.105 C 5.053 7.745 6.903 5.817 9.231 5.691 L 9.474 5.684 Z M 9.285 7.586 C 7.978 7.682 6.948 8.774 6.948 10.105 C 6.948 11.5 8.079 12.632 9.474 12.632 C 10.869 12.632 12 11.5 12 10.105 C 12 8.774 10.97 7.682 9.662 7.586 L 9.474 7.579 L 9.285 7.586 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/>"
    },
    "IconNormalShareNameShare": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 20.21 3.237 C 20.21 1.45 18.761 0 16.973 0 C 15.186 0 13.737 1.45 13.737 3.237 L 13.746 3.485 C 13.752 3.567 13.762 3.648 13.774 3.729 L 13.784 3.779 L 5.851 7.965 L 5.779 7.885 C 5.161 7.242 4.285 6.855 3.338 6.855 C 1.504 6.855 0 8.299 0 10.099 C 0 11.899 1.503 13.342 3.338 13.342 L 3.57 13.334 C 4.415 13.277 5.19 12.913 5.756 12.336 L 5.819 12.264 L 14.445 16.815 C 14.629 16.912 14.839 16.946 15.044 16.912 L 15.071 16.907 L 15.198 16.877 C 15.445 16.799 15.653 16.622 15.767 16.385 L 15.841 16.253 C 15.921 16.126 16.024 16.013 16.147 15.917 C 16.732 15.46 17.575 15.563 18.031 16.147 C 18.487 16.732 18.384 17.576 17.801 18.031 C 17.216 18.488 16.372 18.384 15.916 17.8 L 15.822 17.696 C 15.488 17.377 14.961 17.343 14.587 17.636 C 14.174 17.958 14.101 18.553 14.423 18.966 C 15.523 20.375 17.557 20.625 18.967 19.524 C 20.375 18.425 20.625 16.391 19.524 14.981 C 18.424 13.572 16.39 13.322 14.981 14.423 L 14.791 14.583 C 14.73 14.639 14.671 14.696 14.611 14.76 L 6.066 10.253 L 6.043 10.234 C 5.972 10.188 5.897 10.153 5.819 10.128 L 5.785 10.119 L 5.861 10.095 C 5.899 10.08 5.937 10.063 5.975 10.043 L 15.33 5.107 L 15.497 4.994 L 15.527 4.969 L 15.63 4.869 C 15.879 4.586 15.938 4.175 15.769 3.828 L 15.709 3.687 C 15.658 3.543 15.631 3.392 15.631 3.237 C 15.631 2.496 16.233 1.895 16.973 1.895 C 17.715 1.895 18.316 2.496 18.316 3.237 C 18.316 3.979 17.715 4.579 16.973 4.579 L 16.845 4.588 C 16.382 4.65 16.026 5.047 16.026 5.526 C 16.026 6.049 16.45 6.474 16.973 6.474 C 18.762 6.474 20.21 5.025 20.21 3.237 Z M 1.895 10.099 C 1.895 9.363 2.533 8.75 3.338 8.75 L 3.514 8.76 C 3.975 8.813 4.375 9.069 4.598 9.439 L 4.629 9.5 L 4.65 9.557 C 4.755 9.807 4.962 10.014 5.22 10.108 L 5.262 10.12 L 5.218 10.132 C 4.987 10.21 4.782 10.378 4.664 10.632 L 4.588 10.773 C 4.336 11.181 3.866 11.447 3.338 11.447 C 2.533 11.447 1.895 10.834 1.895 10.099 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.632 1.895)\"/>"
    },
    "IconNormalSparkle2NameSparkleFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.795 4.536 C 8.007 4.546 8.194 4.61 8.384 4.695 C 8.666 4.868 8.869 5.115 9.01 5.41 C 9.11 5.618 9.213 5.893 9.323 6.183 L 9.805 7.46 C 10.15 8.374 10.274 8.679 10.451 8.929 C 10.621 9.169 10.83 9.38 11.071 9.55 C 11.32 9.726 11.627 9.849 12.54 10.194 L 13.818 10.677 C 14.108 10.786 14.382 10.889 14.59 10.989 C 14.763 11.072 15.111 11.25 15.304 11.616 C 15.518 12.024 15.518 12.511 15.304 12.919 C 15.112 13.285 14.763 13.462 14.59 13.545 C 14.382 13.645 14.108 13.748 13.818 13.857 L 12.54 14.34 C 11.628 14.685 11.32 14.809 11.071 14.985 C 10.831 15.155 10.621 15.365 10.451 15.605 C 10.274 15.855 10.15 16.161 9.805 17.075 L 9.323 18.353 C 9.213 18.642 9.11 18.917 9.01 19.125 C 8.927 19.297 8.75 19.646 8.384 19.839 C 7.977 20.053 7.489 20.053 7.081 19.839 C 6.715 19.646 6.537 19.298 6.455 19.125 C 6.355 18.917 6.252 18.643 6.142 18.353 L 5.66 17.075 C 5.314 16.162 5.192 15.855 5.015 15.605 C 4.845 15.365 4.634 15.155 4.394 14.985 C 4.145 14.809 3.839 14.685 2.925 14.34 L 1.648 13.857 C 1.358 13.748 1.083 13.645 0.875 13.545 C 0.703 13.462 0.354 13.286 0.161 12.919 C -0.054 12.511 -0.054 12.024 0.161 11.616 C 0.354 11.25 0.703 11.072 0.875 10.989 C 1.083 10.89 1.358 10.786 1.648 10.677 L 2.925 10.194 C 3.838 9.849 4.145 9.726 4.394 9.55 C 4.634 9.38 4.845 9.169 5.015 8.929 C 5.191 8.679 5.315 8.373 5.66 7.46 L 6.142 6.183 C 6.252 5.893 6.355 5.618 6.455 5.41 C 6.538 5.237 6.715 4.888 7.081 4.695 C 7.304 4.578 7.551 4.525 7.795 4.536 Z M 7.342 8.096 C 7.03 8.922 6.824 9.488 6.484 9.969 C 6.196 10.376 5.84 10.732 5.433 11.02 C 4.952 11.36 4.386 11.566 3.56 11.878 L 2.53 12.267 L 3.56 12.656 C 4.386 12.969 4.952 13.175 5.433 13.516 C 5.84 13.804 6.196 14.159 6.484 14.566 C 6.824 15.048 7.03 15.613 7.342 16.438 L 7.731 17.468 L 8.121 16.438 C 8.433 15.613 8.64 15.048 8.98 14.566 C 9.268 14.16 9.624 13.804 10.031 13.516 C 10.512 13.175 11.077 12.968 11.903 12.656 L 12.932 12.267 L 11.903 11.878 C 11.077 11.566 10.512 11.36 10.031 11.02 C 9.624 10.732 9.268 10.376 8.98 9.969 C 8.639 9.487 8.433 8.922 8.121 8.096 L 7.731 7.065 L 7.342 8.096 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.516 2.484)\"/><path d=\"M 15.452 0 C 15.582 0 15.712 0.023 15.835 0.071 L 15.956 0.128 C 16.173 0.267 16.326 0.451 16.427 0.689 C 16.483 0.821 16.539 0.99 16.592 1.15 L 16.818 1.835 C 17.017 2.438 17.076 2.59 17.156 2.708 C 17.24 2.831 17.347 2.939 17.47 3.023 C 17.588 3.104 17.74 3.161 18.344 3.36 L 19.028 3.587 C 19.375 3.702 19.752 3.807 19.982 4.114 L 20.051 4.223 L 20.107 4.343 C 20.163 4.486 20.187 4.64 20.178 4.791 C 20.169 4.943 20.126 5.093 20.051 5.23 C 19.882 5.54 19.577 5.664 19.49 5.701 C 19.358 5.757 19.188 5.813 19.028 5.866 L 18.344 6.092 C 17.74 6.291 17.588 6.35 17.47 6.43 C 17.347 6.514 17.24 6.621 17.156 6.744 C 17.075 6.862 17.017 7.014 16.818 7.618 L 16.592 8.302 C 16.539 8.462 16.483 8.632 16.427 8.764 C 16.391 8.85 16.267 9.155 15.956 9.325 C 15.8 9.411 15.626 9.454 15.453 9.454 C 15.279 9.454 15.106 9.411 14.949 9.325 C 14.638 9.155 14.513 8.849 14.477 8.764 C 14.421 8.632 14.366 8.462 14.313 8.302 L 14.086 7.618 C 13.887 7.014 13.83 6.862 13.749 6.744 C 13.665 6.621 13.557 6.514 13.434 6.43 C 13.316 6.35 13.164 6.291 12.561 6.092 L 11.876 5.866 C 11.716 5.813 11.547 5.757 11.415 5.701 C 11.329 5.664 11.024 5.541 10.854 5.23 C 10.683 4.917 10.682 4.536 10.854 4.223 L 10.923 4.114 C 10.945 4.085 10.967 4.058 10.991 4.033 C 11.225 3.784 11.562 3.691 11.876 3.587 L 12.561 3.36 C 13.165 3.161 13.316 3.104 13.434 3.023 C 13.557 2.939 13.665 2.831 13.749 2.708 C 13.829 2.59 13.887 2.438 14.086 1.835 L 14.313 1.15 C 14.366 0.99 14.421 0.821 14.477 0.689 C 14.514 0.602 14.639 0.297 14.949 0.128 L 15.069 0.071 C 15.192 0.023 15.322 0 15.452 0 Z M 15.453 2.485 C 15.308 2.921 15.19 3.263 14.989 3.558 C 14.799 3.836 14.559 4.076 14.281 4.266 C 13.985 4.467 13.642 4.587 13.205 4.731 C 13.588 4.865 13.896 4.992 14.167 5.178 C 14.497 5.403 14.782 5.687 15.006 6.017 C 15.192 6.288 15.317 6.597 15.451 6.98 C 15.596 6.542 15.716 6.198 15.917 5.902 C 16.107 5.624 16.347 5.384 16.625 5.194 C 16.92 4.993 17.262 4.875 17.698 4.73 C 17.262 4.586 16.92 4.466 16.625 4.266 C 16.348 4.076 16.107 3.835 15.917 3.558 C 15.717 3.263 15.597 2.921 15.453 2.485 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.516 2.484)\"/>"
    },
    "IconNormalSparkle2NameSparkleFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 7.081 4.945 C 7.483 4.734 7.983 4.731 8.384 4.945 C 8.674 5.1 8.87 5.369 9.01 5.66 C 9.11 5.868 9.213 6.143 9.323 6.433 L 9.805 7.71 C 10.15 8.624 10.274 8.929 10.451 9.179 C 10.621 9.419 10.83 9.63 11.071 9.8 C 11.32 9.976 11.627 10.099 12.54 10.444 L 13.818 10.927 C 14.108 11.036 14.382 11.139 14.59 11.239 C 14.763 11.322 15.111 11.499 15.304 11.866 C 15.518 12.274 15.518 12.761 15.304 13.169 C 15.111 13.535 14.763 13.712 14.59 13.795 C 14.382 13.895 14.108 13.998 13.818 14.107 L 12.54 14.59 C 11.626 14.935 11.32 15.059 11.071 15.235 C 10.831 15.405 10.621 15.615 10.451 15.855 C 10.274 16.105 10.15 16.412 9.805 17.325 L 9.323 18.603 C 9.213 18.893 9.11 19.167 9.01 19.375 C 8.927 19.548 8.75 19.896 8.384 20.089 C 8.18 20.196 7.956 20.249 7.733 20.249 C 7.509 20.249 7.285 20.196 7.081 20.089 C 6.715 19.896 6.537 19.548 6.454 19.375 C 6.355 19.167 6.252 18.893 6.142 18.603 L 5.66 17.325 C 5.314 16.411 5.191 16.105 5.015 15.855 C 4.845 15.615 4.634 15.406 4.394 15.235 C 4.144 15.059 3.839 14.935 2.925 14.59 L 1.648 14.107 C 1.358 13.998 1.083 13.895 0.875 13.795 C 0.703 13.712 0.353 13.536 0.161 13.169 C -0.054 12.761 -0.053 12.274 0.161 11.866 C 0.353 11.499 0.703 11.322 0.875 11.239 C 1.083 11.139 1.358 11.036 1.648 10.927 L 2.925 10.444 C 3.838 10.099 4.145 9.976 4.394 9.8 C 4.634 9.63 4.845 9.419 5.015 9.179 C 5.191 8.929 5.314 8.623 5.66 7.71 L 6.142 6.433 C 6.251 6.143 6.355 5.868 6.454 5.66 C 6.537 5.488 6.715 5.138 7.081 4.945 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.520 2.235)\"/><path d=\"M 15.703 0 C 15.833 0 15.963 0.023 16.086 0.071 L 16.207 0.128 L 16.315 0.197 C 16.547 0.371 16.646 0.614 16.678 0.689 C 16.734 0.821 16.79 0.99 16.843 1.15 L 17.069 1.835 C 17.268 2.439 17.326 2.59 17.407 2.708 C 17.491 2.831 17.598 2.939 17.721 3.023 C 17.839 3.104 17.991 3.161 18.595 3.36 L 19.279 3.587 C 19.439 3.64 19.609 3.695 19.741 3.751 C 19.816 3.783 20.059 3.882 20.233 4.114 L 20.302 4.223 L 20.358 4.343 C 20.47 4.63 20.452 4.956 20.302 5.23 C 20.133 5.539 19.827 5.664 19.741 5.701 C 19.609 5.757 19.439 5.813 19.279 5.866 L 18.595 6.092 C 17.991 6.291 17.839 6.35 17.721 6.43 C 17.598 6.514 17.491 6.621 17.407 6.744 C 17.326 6.862 17.268 7.014 17.069 7.618 L 16.843 8.302 C 16.79 8.462 16.734 8.632 16.678 8.764 C 16.641 8.85 16.517 9.156 16.207 9.325 C 16.051 9.411 15.877 9.454 15.703 9.454 C 15.53 9.454 15.357 9.411 15.2 9.325 C 14.889 9.155 14.765 8.85 14.728 8.764 C 14.672 8.632 14.617 8.462 14.564 8.302 L 14.337 7.618 C 14.138 7.014 14.081 6.862 14 6.744 C 13.916 6.621 13.808 6.514 13.685 6.43 C 13.567 6.349 13.416 6.291 12.812 6.092 L 12.127 5.866 C 11.967 5.813 11.798 5.757 11.666 5.701 C 11.581 5.665 11.275 5.541 11.105 5.23 C 10.933 4.917 10.933 4.537 11.105 4.223 L 11.174 4.114 C 11.196 4.085 11.218 4.058 11.242 4.033 C 11.405 3.859 11.6 3.779 11.666 3.751 C 11.798 3.695 11.967 3.64 12.127 3.587 L 12.812 3.36 C 13.415 3.161 13.567 3.103 13.685 3.023 C 13.808 2.939 13.916 2.831 14 2.708 C 14.08 2.59 14.138 2.438 14.337 1.835 L 14.564 1.15 C 14.617 0.99 14.672 0.821 14.728 0.689 C 14.765 0.603 14.89 0.297 15.2 0.128 L 15.32 0.071 C 15.35 0.059 15.381 0.049 15.412 0.04 C 15.475 0.022 15.54 0.01 15.605 0.004 C 15.637 0.001 15.67 0 15.703 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.520 2.235)\"/>"
    },
    "IconNormalSparkleNameSparkle": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.297 10.63 C 4.87 10.273 4.248 10.273 3.821 10.63 C 3.634 10.786 3.53 10.998 3.429 11.213 C 3.156 11.799 3.052 12.017 2.929 12.209 C 2.65 12.643 2.281 13.012 1.846 13.291 C 1.654 13.415 1.437 13.518 0.851 13.792 C 0.635 13.892 0.424 13.997 0.268 14.183 C -0.089 14.61 -0.089 15.232 0.268 15.659 C 0.424 15.846 0.635 15.95 0.851 16.051 C 1.437 16.324 1.654 16.428 1.846 16.551 C 2.281 16.83 2.65 17.199 2.929 17.634 C 3.052 17.826 3.156 18.043 3.429 18.629 C 3.53 18.845 3.634 19.056 3.821 19.212 C 4.248 19.569 4.87 19.569 5.297 19.212 C 5.483 19.056 5.588 18.845 5.688 18.629 C 5.962 18.043 6.065 17.826 6.189 17.634 C 6.468 17.199 6.837 16.83 7.271 16.551 C 7.463 16.428 7.681 16.324 8.267 16.051 C 8.482 15.95 8.694 15.846 8.85 15.659 C 9.207 15.232 9.207 14.61 8.85 14.183 C 8.694 13.997 8.482 13.892 8.267 13.792 C 7.681 13.518 7.463 13.415 7.271 13.291 C 6.837 13.012 6.468 12.643 6.189 12.209 C 6.065 12.017 5.962 11.799 5.688 11.213 C 5.588 10.998 5.483 10.786 5.297 10.63 Z M 4.443 13.182 C 4.483 13.12 4.521 13.057 4.559 12.991 C 4.596 13.057 4.635 13.12 4.675 13.182 C 5.093 13.833 5.647 14.387 6.298 14.805 C 6.36 14.845 6.424 14.884 6.489 14.921 C 6.424 14.959 6.36 14.997 6.298 15.037 C 5.647 15.455 5.093 16.009 4.675 16.66 C 4.635 16.723 4.596 16.786 4.559 16.851 C 4.521 16.786 4.483 16.723 4.443 16.66 C 4.025 16.009 3.471 15.455 2.82 15.037 C 2.757 14.997 2.694 14.959 2.629 14.921 C 2.694 14.884 2.757 14.845 2.82 14.805 C 3.471 14.387 4.025 13.833 4.443 13.182 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.440 2.077)\"/><path d=\"M 6.342 5.442 C 6.013 5.606 5.579 5.855 5.349 6.3 C 5.207 6.574 5.136 6.874 5.136 7.174 C 5.136 7.474 5.207 7.774 5.349 8.048 C 5.579 8.493 6.013 8.742 6.342 8.906 C 6.637 9.053 7.018 9.208 7.462 9.384 L 8.505 9.796 C 9.046 10.009 9.474 10.438 9.688 10.979 L 10.034 11.857 C 10.238 12.372 10.413 12.811 10.578 13.142 C 10.742 13.471 10.991 13.905 11.436 14.135 C 11.71 14.277 12.01 14.348 12.31 14.348 C 12.61 14.348 12.91 14.277 13.184 14.135 C 13.629 13.905 13.878 13.471 14.042 13.142 C 14.207 12.811 14.382 12.372 14.585 11.857 L 14.932 10.979 C 15.145 10.438 15.574 10.009 16.115 9.796 L 17.158 9.384 C 17.602 9.208 17.983 9.053 18.278 8.906 C 18.607 8.742 19.041 8.493 19.271 8.048 C 19.413 7.774 19.484 7.474 19.484 7.174 C 19.484 6.874 19.413 6.574 19.271 6.3 C 19.041 5.855 18.607 5.606 18.278 5.442 C 17.983 5.295 17.602 5.14 17.158 4.964 L 16.115 4.552 C 15.574 4.339 15.145 3.911 14.932 3.369 L 14.585 2.491 C 14.382 1.976 14.207 1.538 14.042 1.206 C 13.878 0.877 13.629 0.443 13.184 0.213 C 12.91 0.071 12.61 0 12.31 0 C 12.01 0 11.71 0.071 11.436 0.213 C 10.991 0.443 10.742 0.877 10.578 1.206 C 10.413 1.538 10.238 1.976 10.034 2.491 L 9.688 3.369 C 9.474 3.911 9.046 4.339 8.505 4.552 L 7.462 4.964 C 7.018 5.14 6.637 5.295 6.342 5.442 Z M 11.533 3.598 L 12.217 1.863 C 12.234 1.821 12.264 1.8 12.31 1.8 C 12.356 1.8 12.386 1.821 12.403 1.863 L 13.087 3.598 C 13.289 4.106 13.455 4.497 13.692 4.838 C 13.954 5.211 14.279 5.536 14.653 5.797 C 14.987 6.027 15.368 6.191 15.859 6.386 L 17.621 7.081 C 17.664 7.098 17.684 7.128 17.684 7.174 C 17.684 7.22 17.664 7.25 17.621 7.267 L 15.859 7.962 C 15.368 8.157 14.987 8.321 14.653 8.552 C 14.279 8.813 13.954 9.137 13.692 9.511 C 13.455 9.852 13.289 10.243 13.087 10.75 L 12.403 12.485 C 12.386 12.528 12.356 12.549 12.31 12.549 C 12.264 12.549 12.234 12.528 12.217 12.485 L 11.533 10.75 C 11.331 10.243 11.165 9.852 10.928 9.511 C 10.666 9.137 10.34 8.813 9.966 8.552 C 9.633 8.321 9.252 8.157 8.761 7.962 L 6.999 7.267 C 6.956 7.25 6.936 7.22 6.936 7.174 C 6.936 7.128 6.956 7.098 6.999 7.081 L 8.761 6.386 C 9.252 6.191 9.633 6.027 9.966 5.797 C 10.34 5.536 10.666 5.211 10.928 4.838 C 11.165 4.497 11.331 4.106 11.533 3.598 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.440 2.077)\"/>"
    },
    "IconNormalStarNameStarFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 10.435 2.195 C 10.408 2.241 10.379 2.29 10.349 2.343 L 8.04 6.307 C 8.034 6.318 8.026 6.33 8.018 6.344 C 7.941 6.481 7.791 6.744 7.542 6.925 C 7.293 7.106 6.997 7.167 6.843 7.198 C 6.827 7.202 6.813 7.205 6.8 7.207 L 2.317 8.178 C 2.258 8.191 2.202 8.203 2.15 8.215 C 2.185 8.255 2.223 8.297 2.264 8.342 L 5.32 11.763 C 5.329 11.772 5.338 11.783 5.349 11.795 C 5.455 11.911 5.659 12.135 5.754 12.427 C 5.85 12.72 5.816 13.021 5.798 13.177 C 5.797 13.193 5.795 13.207 5.794 13.22 L 5.332 17.784 C 5.325 17.844 5.32 17.901 5.314 17.954 C 5.364 17.933 5.416 17.91 5.471 17.885 L 9.669 16.036 C 9.681 16.031 9.694 16.025 9.708 16.018 C 9.852 15.953 10.127 15.828 10.435 15.828 C 10.743 15.828 11.018 15.953 11.162 16.018 C 11.176 16.025 11.189 16.031 11.201 16.036 L 15.399 17.885 C 15.454 17.91 15.506 17.933 15.556 17.954 C 15.55 17.901 15.545 17.844 15.538 17.784 L 15.076 13.22 C 15.075 13.207 15.073 13.193 15.072 13.177 C 15.054 13.021 15.02 12.72 15.116 12.427 C 15.211 12.135 15.415 11.911 15.521 11.795 C 15.532 11.783 15.541 11.772 15.55 11.763 L 18.606 8.342 C 18.647 8.297 18.685 8.255 18.72 8.215 C 18.668 8.203 18.612 8.191 18.553 8.178 L 14.07 7.207 C 14.057 7.205 14.043 7.202 14.027 7.198 C 13.873 7.167 13.577 7.106 13.328 6.925 C 13.079 6.744 12.929 6.481 12.852 6.344 C 12.844 6.33 12.836 6.318 12.83 6.307 L 10.521 2.343 C 10.491 2.29 10.462 2.241 10.435 2.195 Z M 9.337 0.585 C 9.526 0.349 9.877 0 10.435 0 C 10.993 0 11.344 0.349 11.533 0.585 C 11.708 0.803 11.882 1.102 12.05 1.392 C 12.059 1.407 12.068 1.422 12.077 1.437 L 14.385 5.401 C 14.393 5.414 14.401 5.427 14.408 5.439 C 14.421 5.442 14.435 5.445 14.451 5.448 L 18.934 6.419 C 18.951 6.423 18.968 6.426 18.985 6.43 C 19.313 6.501 19.65 6.574 19.912 6.672 C 20.195 6.779 20.635 7.006 20.808 7.536 C 20.98 8.067 20.757 8.509 20.591 8.762 C 20.437 8.995 20.207 9.253 19.983 9.502 C 19.972 9.516 19.96 9.529 19.948 9.542 L 16.892 12.962 C 16.881 12.974 16.872 12.985 16.863 12.995 C 16.864 13.009 16.866 13.023 16.867 13.039 L 17.329 17.602 C 17.331 17.62 17.333 17.637 17.335 17.655 C 17.368 17.988 17.403 18.332 17.39 18.611 C 17.376 18.914 17.297 19.402 16.846 19.73 C 16.394 20.058 15.905 19.982 15.613 19.902 C 15.344 19.828 15.028 19.689 14.721 19.554 C 14.705 19.547 14.689 19.54 14.673 19.532 L 10.475 17.683 C 10.461 17.676 10.447 17.671 10.435 17.665 C 10.423 17.671 10.409 17.676 10.395 17.683 L 6.197 19.532 C 6.181 19.54 6.165 19.547 6.149 19.554 C 5.842 19.689 5.526 19.828 5.257 19.902 C 4.965 19.982 4.476 20.058 4.024 19.73 C 3.573 19.402 3.494 18.914 3.48 18.611 C 3.467 18.332 3.502 17.988 3.535 17.655 C 3.537 17.637 3.539 17.62 3.541 17.602 L 4.003 13.039 C 4.004 13.023 4.006 13.009 4.007 12.995 C 3.998 12.985 3.989 12.974 3.978 12.962 L 0.922 9.542 C 0.91 9.529 0.898 9.516 0.887 9.502 C 0.663 9.253 0.433 8.995 0.279 8.762 C 0.113 8.509 -0.11 8.067 0.062 7.536 C 0.235 7.006 0.675 6.779 0.958 6.672 C 1.22 6.574 1.557 6.501 1.885 6.43 C 1.902 6.426 1.919 6.423 1.936 6.419 L 6.419 5.448 C 6.435 5.445 6.449 5.442 6.462 5.439 C 6.469 5.427 6.477 5.414 6.485 5.401 L 8.793 1.437 C 8.802 1.422 8.811 1.407 8.82 1.392 C 8.988 1.102 9.162 0.803 9.337 0.585 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.565 1.793)\"/>"
    },
    "IconNormalStarNameStarFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.337 0.585 C 9.526 0.349 9.877 0 10.435 0 C 10.993 0 11.344 0.349 11.533 0.585 C 11.708 0.803 11.882 1.102 12.05 1.392 C 12.059 1.407 12.068 1.422 12.077 1.437 L 14.385 5.401 C 14.393 5.414 14.401 5.427 14.408 5.439 C 14.421 5.442 14.435 5.445 14.451 5.448 L 18.934 6.419 C 18.951 6.423 18.968 6.426 18.985 6.43 C 19.313 6.501 19.65 6.574 19.912 6.672 C 20.195 6.779 20.635 7.006 20.808 7.536 C 20.98 8.067 20.757 8.509 20.591 8.762 C 20.437 8.995 20.207 9.253 19.983 9.502 C 19.972 9.516 19.96 9.529 19.948 9.542 L 16.892 12.962 C 16.881 12.974 16.872 12.985 16.863 12.995 C 16.864 13.009 16.866 13.023 16.867 13.039 L 17.329 17.602 C 17.331 17.62 17.333 17.637 17.335 17.655 C 17.368 17.988 17.403 18.332 17.39 18.611 C 17.376 18.914 17.297 19.402 16.846 19.73 C 16.394 20.058 15.905 19.982 15.613 19.902 C 15.344 19.828 15.028 19.689 14.721 19.554 C 14.705 19.547 14.689 19.54 14.673 19.532 L 10.475 17.683 C 10.461 17.676 10.447 17.671 10.435 17.665 C 10.423 17.671 10.409 17.676 10.395 17.683 L 6.197 19.532 C 6.181 19.54 6.165 19.547 6.149 19.554 C 5.842 19.689 5.526 19.828 5.257 19.902 C 4.965 19.982 4.476 20.058 4.024 19.73 C 3.573 19.402 3.494 18.914 3.48 18.611 C 3.467 18.332 3.502 17.988 3.535 17.655 C 3.537 17.637 3.539 17.62 3.541 17.602 L 4.003 13.039 C 4.004 13.023 4.006 13.009 4.007 12.995 C 3.998 12.985 3.989 12.974 3.978 12.962 L 0.922 9.542 C 0.91 9.529 0.898 9.516 0.887 9.502 C 0.663 9.253 0.433 8.995 0.279 8.762 C 0.113 8.509 -0.11 8.067 0.062 7.536 C 0.235 7.006 0.675 6.779 0.958 6.672 C 1.22 6.574 1.557 6.501 1.885 6.43 C 1.902 6.426 1.919 6.423 1.936 6.419 L 6.419 5.448 C 6.435 5.445 6.449 5.442 6.462 5.439 C 6.469 5.427 6.477 5.414 6.485 5.401 L 8.793 1.437 C 8.802 1.422 8.811 1.407 8.82 1.392 C 8.988 1.102 9.162 0.803 9.337 0.585 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.565 1.793)\"/>"
    },
    "IconNormalTag2NameTagFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.657 7.153 C 14.348 7.153 14.907 6.593 14.907 5.903 C 14.907 5.212 14.348 4.653 13.657 4.653 C 12.967 4.653 12.407 5.212 12.407 5.903 C 12.407 6.593 12.967 7.153 13.657 7.153 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.593 1.846)\"/><path d=\"M 12.05 0 C 11.409 0 10.94 0 10.49 0.108 C 10.092 0.203 9.711 0.361 9.362 0.575 C 8.967 0.817 8.636 1.148 8.183 1.602 L 2.388 7.396 C 1.817 7.968 1.35 8.435 1.001 8.846 C 0.64 9.271 0.353 9.694 0.191 10.195 C -0.064 10.978 -0.064 11.822 0.191 12.605 C 0.353 13.106 0.64 13.529 1.001 13.954 C 1.35 14.365 1.817 14.833 2.388 15.404 L 4.153 17.169 C 4.725 17.74 5.192 18.208 5.603 18.556 C 6.028 18.917 6.452 19.204 6.952 19.367 C 7.735 19.621 8.579 19.621 9.363 19.367 C 9.863 19.204 10.287 18.917 10.712 18.556 C 11.123 18.208 11.59 17.74 12.161 17.169 L 17.956 11.375 C 18.409 10.921 18.74 10.59 18.983 10.195 C 19.196 9.846 19.354 9.466 19.45 9.068 C 19.558 8.617 19.558 8.149 19.557 7.508 L 19.557 5.792 C 19.558 5.151 19.558 4.683 19.45 4.232 C 19.354 3.834 19.197 3.454 18.983 3.105 C 18.741 2.71 18.409 2.379 17.956 1.926 L 17.632 1.602 C 17.179 1.148 16.848 0.817 16.453 0.575 C 16.104 0.361 15.723 0.203 15.325 0.108 C 14.875 0 14.406 0 13.765 0 L 12.05 0 Z M 10.91 1.858 C 11.127 1.806 11.369 1.8 12.146 1.8 L 13.669 1.8 C 14.446 1.8 14.688 1.806 14.905 1.858 C 15.12 1.91 15.324 1.994 15.512 2.11 C 15.703 2.226 15.878 2.393 16.427 2.942 L 16.615 3.131 C 17.164 3.68 17.331 3.855 17.448 4.045 C 17.563 4.233 17.648 4.438 17.699 4.652 C 17.752 4.87 17.757 5.112 17.757 5.888 L 17.757 7.412 C 17.757 8.188 17.752 8.43 17.699 8.648 C 17.648 8.862 17.563 9.067 17.448 9.255 C 17.331 9.445 17.164 9.62 16.615 10.17 L 10.915 15.87 C 10.311 16.474 9.895 16.889 9.547 17.184 C 9.207 17.473 8.991 17.595 8.806 17.655 C 8.385 17.792 7.93 17.792 7.508 17.655 C 7.324 17.595 7.108 17.473 6.768 17.184 C 6.42 16.889 6.004 16.474 5.4 15.87 L 3.688 14.158 C 3.083 13.553 2.669 13.138 2.373 12.79 C 2.085 12.449 1.963 12.233 1.903 12.049 C 1.766 11.627 1.766 11.173 1.903 10.751 C 1.963 10.567 2.085 10.351 2.373 10.011 C 2.669 9.662 3.083 9.247 3.688 8.642 L 9.388 2.942 C 9.937 2.393 10.112 2.226 10.303 2.11 C 10.491 1.994 10.695 1.91 10.91 1.858 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.593 1.846)\"/>"
    },
    "IconNormalTag2NameTagFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.05 0 L 13.765 0 C 14.406 0 14.875 0 15.325 0.108 C 15.723 0.203 16.104 0.361 16.453 0.575 C 16.848 0.817 17.179 1.148 17.632 1.602 L 17.956 1.926 C 18.409 2.379 18.741 2.71 18.983 3.105 C 19.197 3.454 19.354 3.834 19.45 4.232 C 19.558 4.683 19.558 5.151 19.557 5.792 L 19.557 7.508 C 19.558 8.149 19.558 8.617 19.45 9.068 C 19.354 9.466 19.196 9.846 18.983 10.195 C 18.74 10.59 18.409 10.921 17.956 11.375 L 12.161 17.169 C 11.59 17.74 11.123 18.208 10.712 18.556 C 10.287 18.917 9.863 19.204 9.363 19.367 C 8.579 19.621 7.735 19.621 6.952 19.367 C 6.452 19.204 6.028 18.917 5.603 18.556 C 5.192 18.208 4.725 17.74 4.153 17.169 L 2.388 15.404 C 1.817 14.833 1.35 14.365 1.001 13.954 C 0.64 13.529 0.353 13.106 0.191 12.605 C -0.064 11.822 -0.064 10.978 0.191 10.195 C 0.353 9.694 0.64 9.271 1.001 8.846 C 1.35 8.435 1.817 7.968 2.388 7.396 L 8.183 1.602 C 8.636 1.148 8.967 0.817 9.362 0.575 C 9.711 0.361 10.092 0.203 10.49 0.108 C 10.94 0 11.409 0 12.05 0 Z M 13.657 7.403 C 14.486 7.403 15.157 6.732 15.157 5.903 C 15.157 5.075 14.486 4.403 13.657 4.403 C 12.829 4.403 12.157 5.075 12.157 5.903 C 12.157 6.732 12.829 7.403 13.657 7.403 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.593 1.847)\"/>"
    },
    "IconNormalThunderNameThunderFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.721 0.13 C 15.472 -0.302 16.336 0.413 16.106 1.206 L 16.066 1.32 L 13.412 7.605 L 15.346 8.246 C 15.801 8.397 16.065 8.86 15.979 9.319 L 15.947 9.444 C 15.796 9.899 15.333 10.163 14.875 10.077 L 14.75 10.045 L 11.842 9.081 C 11.358 8.92 11.095 8.41 11.226 7.932 L 11.268 7.813 L 13.224 3.176 L 3.102 8.997 L 8.427 11.16 C 8.875 11.342 9.108 11.828 8.985 12.283 L 8.943 12.406 L 6.985 17.042 L 18.791 10.252 C 19.207 10.013 19.728 10.124 20.013 10.494 L 20.085 10.601 C 20.324 11.017 20.212 11.538 19.843 11.823 L 19.736 11.895 L 5.49 20.089 C 4.739 20.521 3.874 19.806 4.104 19.013 L 4.145 18.899 L 6.822 12.554 L 0.591 10.023 C -0.095 9.745 -0.198 8.841 0.356 8.405 L 0.475 8.324 L 14.721 0.13 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 1.891)\"/>"
    },
    "IconNormalThunderNameThunderFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.475 8.324 L 0.356 8.405 C -0.198 8.841 -0.095 9.745 0.591 10.023 L 6.822 12.554 L 4.145 18.899 C 3.792 19.735 4.703 20.541 5.49 20.089 L 19.736 11.895 L 19.855 11.814 C 20.409 11.378 20.305 10.474 19.62 10.196 L 13.387 7.664 L 16.066 1.32 C 16.419 0.484 15.508 -0.322 14.721 0.13 L 0.475 8.324 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 1.891)\"/>"
    },
    "IconNormalTicketNameTicketFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.804 5.562 C 10.156 5.21 10.726 5.21 11.077 5.562 L 11.961 6.446 C 12.312 6.797 12.312 7.367 11.961 7.718 C 11.609 8.07 11.04 8.07 10.688 7.718 L 9.804 6.835 C 9.453 6.483 9.453 5.913 9.804 5.562 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.559 1.558)\"/><path d=\"M 13.163 8.921 C 13.515 8.569 14.084 8.569 14.436 8.921 L 15.32 9.804 C 15.671 10.156 15.671 10.726 15.32 11.077 C 14.968 11.429 14.398 11.429 14.047 11.077 L 13.163 10.193 C 12.812 9.842 12.812 9.272 13.163 8.921 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.559 1.558)\"/><path d=\"M 2.388 8.028 C 1.817 8.599 1.35 9.067 1.001 9.477 C 0.64 9.903 0.353 10.326 0.191 10.827 C -0.064 11.61 -0.064 12.454 0.191 13.237 C 0.459 14.062 1.093 14.731 1.928 15.574 C 2.206 15.854 2.634 15.921 2.984 15.739 C 3.588 15.424 4.349 15.522 4.855 16.027 C 5.36 16.532 5.458 17.294 5.143 17.898 C 4.96 18.248 5.027 18.676 5.308 18.953 C 6.151 19.788 6.82 20.423 7.645 20.691 C 8.428 20.945 9.272 20.945 10.055 20.691 C 10.555 20.528 10.979 20.241 11.404 19.88 C 11.815 19.532 12.282 19.064 12.854 18.493 L 18.493 12.854 C 19.064 12.282 19.532 11.815 19.88 11.404 C 20.241 10.979 20.528 10.555 20.691 10.055 C 20.945 9.272 20.945 8.428 20.691 7.645 C 20.423 6.82 19.788 6.151 18.953 5.308 C 18.676 5.027 18.248 4.96 17.898 5.143 C 17.294 5.458 16.532 5.36 16.027 4.855 C 15.521 4.349 15.424 3.588 15.739 2.984 C 15.921 2.634 15.854 2.206 15.574 1.928 C 14.731 1.093 14.062 0.459 13.237 0.191 C 12.454 -0.064 11.61 -0.064 10.827 0.191 C 10.326 0.353 9.903 0.64 9.477 1.001 C 9.067 1.35 8.599 1.817 8.028 2.388 L 2.388 8.028 Z M 2.029 11.078 C 2.163 10.814 2.424 10.537 3.264 9.698 L 9.698 3.264 C 10.537 2.424 10.814 2.164 11.078 2.029 C 11.677 1.724 12.386 1.724 12.985 2.029 C 13.189 2.133 13.403 2.314 13.888 2.79 C 13.562 3.937 13.849 5.223 14.754 6.127 C 15.658 7.032 16.944 7.319 18.091 6.993 C 18.567 7.478 18.749 7.692 18.853 7.896 C 19.158 8.495 19.158 9.204 18.853 9.803 C 18.718 10.067 18.457 10.344 17.618 11.183 L 11.183 17.618 C 10.344 18.457 10.067 18.718 9.803 18.853 C 9.204 19.158 8.495 19.158 7.896 18.853 C 7.692 18.749 7.478 18.567 6.993 18.091 C 7.319 16.944 7.032 15.658 6.127 14.754 C 5.223 13.85 3.937 13.562 2.79 13.888 C 2.314 13.403 2.133 13.189 2.029 12.985 C 1.724 12.386 1.724 11.677 2.029 11.078 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.559 1.558)\"/>"
    },
    "IconNormalTicketNameTicketFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 2.388 8.028 L 8.028 2.388 C 8.599 1.817 9.067 1.35 9.477 1.001 C 9.903 0.64 10.326 0.353 10.827 0.191 C 11.61 -0.064 12.454 -0.064 13.237 0.191 C 14.062 0.459 14.731 1.093 15.574 1.928 C 15.854 2.206 15.921 2.634 15.739 2.984 C 15.424 3.588 15.521 4.349 16.027 4.855 C 16.532 5.36 17.294 5.458 17.898 5.143 C 18.248 4.96 18.676 5.027 18.953 5.308 C 19.788 6.151 20.423 6.82 20.691 7.645 C 20.945 8.428 20.945 9.272 20.691 10.055 C 20.528 10.555 20.241 10.979 19.88 11.404 C 19.532 11.815 19.064 12.282 18.493 12.854 L 12.854 18.493 C 12.282 19.064 11.815 19.532 11.404 19.88 C 10.979 20.241 10.555 20.528 10.055 20.691 C 9.272 20.945 8.428 20.945 7.645 20.691 C 6.82 20.423 6.151 19.788 5.308 18.953 C 5.027 18.676 4.96 18.248 5.143 17.898 C 5.458 17.294 5.36 16.532 4.855 16.027 C 4.349 15.522 3.588 15.424 2.984 15.739 C 2.634 15.921 2.206 15.854 1.928 15.574 C 1.093 14.731 0.459 14.062 0.191 13.237 C -0.064 12.454 -0.064 11.61 0.191 10.827 C 0.353 10.326 0.64 9.903 1.001 9.477 C 1.35 9.067 1.817 8.599 2.388 8.028 Z M 9.452 5.21 C 9.804 4.858 10.373 4.858 10.725 5.21 L 11.786 6.27 C 12.137 6.622 12.137 7.192 11.786 7.543 C 11.434 7.895 10.864 7.895 10.513 7.543 L 9.452 6.482 C 9.101 6.131 9.101 5.561 9.452 5.21 Z M 13.34 9.098 C 13.692 8.746 14.261 8.746 14.613 9.098 L 15.674 10.158 C 16.025 10.51 16.025 11.08 15.674 11.431 C 15.322 11.783 14.752 11.783 14.401 11.431 L 13.34 10.37 C 12.989 10.019 12.989 9.449 13.34 9.098 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.559 1.558)\"/>"
    },
    "IconNormalTrashNameTrash": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 12.316 0 C 12.839 0 13.263 0.424 13.263 0.947 C 13.263 1.427 12.907 1.823 12.444 1.886 L 12.316 1.895 L 6.632 1.895 C 6.108 1.895 5.684 1.471 5.684 0.947 C 5.684 0.468 6.041 0.071 6.503 0.009 L 6.632 0 L 12.316 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/><path d=\"M 18 2.526 C 18.523 2.526 18.947 2.95 18.947 3.474 C 18.947 3.953 18.591 4.35 18.129 4.412 L 18 4.421 L 3.789 4.421 L 3.789 18.632 L 15.158 18.632 L 15.158 7.263 C 15.158 6.784 15.514 6.387 15.977 6.324 L 16.105 6.316 C 16.585 6.316 16.981 6.672 17.044 7.135 L 17.053 7.263 L 17.053 19.579 C 17.053 20.059 16.696 20.455 16.234 20.518 L 16.105 20.526 L 2.842 20.526 C 2.362 20.526 1.966 20.17 1.903 19.707 L 1.895 19.579 L 1.895 4.421 L 0.947 4.421 C 0.424 4.421 0 3.997 0 3.474 C 0 2.994 0.356 2.598 0.819 2.535 L 0.947 2.526 L 18 2.526 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/><path d=\"M 12.623 8.398 C 12.56 7.935 12.164 7.579 11.684 7.579 C 11.161 7.579 10.737 8.003 10.737 8.526 L 10.737 14.211 L 10.746 14.339 C 10.808 14.801 11.205 15.158 11.684 15.158 C 12.207 15.158 12.632 14.734 12.632 14.211 L 12.632 8.526 L 12.623 8.398 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/><path d=\"M 8.202 8.398 C 8.139 7.935 7.743 7.579 7.263 7.579 C 6.74 7.579 6.316 8.003 6.316 8.526 L 6.316 14.211 L 6.324 14.339 C 6.387 14.801 6.784 15.158 7.263 15.158 C 7.786 15.158 8.211 14.734 8.211 14.211 L 8.211 8.526 L 8.202 8.398 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.526 1.895)\"/>"
    },
    "IconNormalTrophyNameTrophyFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.4 0 C 4.903 0 4.5 0.403 4.5 0.9 L 4.5 3.5 L 0.9 3.5 C 0.403 3.5 0 3.903 0 4.4 C 0 10.01 4.442 14.582 10 14.792 L 10 17 L 5.4 17 C 4.903 17 4.5 17.403 4.5 17.9 C 4.5 18.397 4.903 18.8 5.4 18.8 L 16.4 18.8 C 16.897 18.8 17.3 18.397 17.3 17.9 C 17.3 17.403 16.897 17 16.4 17 L 11.8 17 L 11.8 14.792 C 17.358 14.582 21.8 10.01 21.8 4.4 C 21.8 3.903 21.397 3.5 20.9 3.5 L 17.3 3.5 L 17.3 0.9 C 17.3 0.661 17.205 0.432 17.036 0.264 C 16.867 0.095 16.639 0 16.4 0 L 5.4 0 Z M 17.3 5.3 L 17.3 6.2 C 17.3 7.602 17.267 8.484 17.183 9.179 L 17.182 9.192 C 17.079 9.943 16.899 10.62 16.624 11.232 C 18.452 9.832 19.702 7.714 19.953 5.3 L 17.3 5.3 Z M 5.176 11.232 C 4.906 10.626 4.73 9.953 4.629 9.189 L 4.628 9.184 C 4.532 8.432 4.5 7.538 4.5 6.2 L 4.5 5.3 L 1.847 5.3 C 2.098 7.714 3.348 9.832 5.176 11.232 Z M 6.3 6.2 L 6.3 1.8 L 15.5 1.8 L 15.5 6.2 C 15.5 7.586 15.467 8.376 15.397 8.956 C 15.231 10.173 14.838 10.998 14.17 11.667 C 13.318 12.509 12.117 13 10.9 13 C 9.694 13 8.471 12.498 7.629 11.667 C 6.961 10.998 6.58 10.205 6.413 8.955 C 6.333 8.321 6.3 7.522 6.3 6.2 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.100 3.100)\"/>"
    },
    "IconNormalTrophyNameTrophyFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 4.5 0.9 C 4.5 0.403 4.903 0 5.4 0 L 16.4 0 C 16.639 0 16.867 0.095 17.036 0.264 C 17.205 0.432 17.3 0.661 17.3 0.9 L 17.3 3.5 L 20.9 3.5 C 21.397 3.5 21.8 3.903 21.8 4.4 C 21.8 10.01 17.358 14.582 11.8 14.792 L 11.8 17 L 16.4 17 C 16.897 17 17.3 17.403 17.3 17.9 C 17.3 18.397 16.897 18.8 16.4 18.8 L 5.4 18.8 C 4.903 18.8 4.5 18.397 4.5 17.9 C 4.5 17.403 4.903 17 5.4 17 L 10 17 L 10 14.792 C 4.442 14.582 0 10.01 0 4.4 C 0 3.903 0.403 3.5 0.9 3.5 L 4.5 3.5 L 4.5 0.9 Z M 17.3 6.2 L 17.3 5.3 L 19.953 5.3 C 19.702 7.714 18.452 9.832 16.624 11.232 C 16.899 10.62 17.079 9.943 17.182 9.192 L 17.183 9.179 C 17.267 8.484 17.3 7.602 17.3 6.2 Z M 4.629 9.189 C 4.73 9.953 4.906 10.626 5.176 11.232 C 3.348 9.832 2.098 7.714 1.847 5.3 L 4.5 5.3 L 4.5 6.2 C 4.5 7.538 4.532 8.432 4.628 9.184 L 4.629 9.189 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.100 3.100)\"/>"
    },
    "IconNormalTuneNameTune": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0.947 4.421 L 1.71 4.421 C 2.122 5.879 3.463 6.947 5.053 6.947 C 6.642 6.947 7.983 5.879 8.395 4.421 L 16.737 4.421 L 16.865 4.412 C 17.328 4.35 17.684 3.953 17.684 3.474 C 17.684 2.95 17.26 2.526 16.737 2.526 L 8.395 2.526 C 7.983 1.069 6.642 0 5.053 0 C 3.463 0 2.122 1.069 1.71 2.526 L 0.947 2.526 L 0.819 2.535 C 0.356 2.598 0 2.994 0 3.474 C 0 3.997 0.424 4.421 0.947 4.421 Z M 6.632 3.474 C 6.632 2.602 5.924 1.895 5.053 1.895 C 4.181 1.895 3.474 2.602 3.474 3.474 C 3.474 4.345 4.181 5.053 5.053 5.053 C 5.924 5.053 6.632 4.345 6.632 3.474 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.158 2.211)\"/><path d=\"M 9.158 10.737 L 9.286 10.728 C 9.696 12.19 11.039 13.263 12.632 13.263 C 14.221 13.263 15.562 12.194 15.974 10.737 L 16.737 10.737 L 16.865 10.728 C 17.328 10.665 17.684 10.269 17.684 9.789 C 17.684 9.266 17.26 8.842 16.737 8.842 L 15.974 8.842 C 15.562 7.384 14.221 6.316 12.632 6.316 C 11.039 6.316 9.696 7.389 9.286 8.851 C 9.244 8.845 9.201 8.842 9.158 8.842 L 0.947 8.842 L 0.819 8.851 C 0.356 8.913 0 9.31 0 9.789 C 0 10.313 0.424 10.737 0.947 10.737 L 9.158 10.737 Z M 14.211 9.789 C 14.211 8.918 13.503 8.211 12.632 8.211 C 11.76 8.211 11.053 8.918 11.053 9.789 C 11.053 10.661 11.76 11.368 12.632 11.368 C 13.503 11.368 14.211 10.661 14.211 9.789 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.158 2.211)\"/><path d=\"M 5.053 12.632 C 3.463 12.632 2.122 13.7 1.71 15.158 L 0.947 15.158 L 0.819 15.167 C 0.356 15.229 0 15.626 0 16.105 C 0 16.628 0.424 17.053 0.947 17.053 L 1.71 17.053 C 2.122 18.51 3.463 19.579 5.053 19.579 C 6.642 19.579 7.983 18.51 8.395 17.053 L 16.737 17.053 L 16.865 17.044 C 17.328 16.981 17.684 16.585 17.684 16.105 C 17.684 15.582 17.26 15.158 16.737 15.158 L 8.395 15.158 C 7.983 13.7 6.642 12.632 5.053 12.632 Z M 5.053 14.526 C 5.924 14.526 6.632 15.234 6.632 16.105 C 6.632 16.977 5.924 17.684 5.053 17.684 C 4.181 17.684 3.474 16.977 3.474 16.105 C 3.474 15.234 4.181 14.526 5.053 14.526 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.158 2.211)\"/>"
    },
    "IconNormalUploadNameUpload": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 16.737 11.056 C 17.217 11.056 17.613 11.412 17.676 11.874 L 17.684 12.003 L 17.684 17.662 C 17.684 18.141 17.329 18.537 16.867 18.601 L 16.738 18.61 L 0.949 18.635 C 0.469 18.635 0.072 18.279 0.009 17.816 L 0 17.687 L 0 12.028 C 0 11.505 0.424 11.08 0.947 11.08 C 1.427 11.08 1.823 11.437 1.886 11.899 L 1.895 12.028 L 1.895 16.739 L 15.79 16.716 L 15.79 12.003 C 15.79 11.523 16.146 11.127 16.608 11.064 L 16.737 11.056 Z M 8.857 0 L 8.83 0 C 8.879 0 8.927 0.004 8.974 0.011 C 8.987 0.013 9 0.015 9.012 0.018 C 9.046 0.024 9.078 0.032 9.11 0.042 C 9.123 0.046 9.136 0.051 9.15 0.055 C 9.182 0.067 9.213 0.08 9.243 0.095 C 9.256 0.101 9.27 0.108 9.284 0.116 C 9.308 0.129 9.331 0.143 9.353 0.158 C 9.366 0.166 9.38 0.176 9.393 0.186 L 9.499 0.277 L 13.927 4.701 C 14.297 5.071 14.297 5.671 13.927 6.041 C 13.591 6.377 13.065 6.408 12.694 6.133 L 12.587 6.041 L 9.777 3.232 L 9.777 13.898 C 9.777 14.421 9.353 14.845 8.83 14.845 C 8.35 14.845 7.954 14.489 7.891 14.026 L 7.882 13.898 L 7.882 3.236 L 5.079 6.041 C 4.743 6.377 4.216 6.408 3.845 6.133 L 3.739 6.041 C 3.403 5.705 3.372 5.179 3.647 4.808 L 3.739 4.702 L 8.16 0.278 L 8.251 0.197 C 8.257 0.193 8.263 0.188 8.269 0.184 L 8.16 0.278 C 8.203 0.235 8.249 0.196 8.298 0.163 C 8.328 0.143 8.359 0.124 8.391 0.108 C 8.402 0.102 8.412 0.097 8.423 0.091 C 8.459 0.074 8.497 0.059 8.537 0.046 C 8.543 0.044 8.548 0.043 8.554 0.041 C 8.641 0.014 8.734 0 8.83 0 C 8.844 0 8.85 0 8.857 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.158 3.471)\"/>"
    },
    "IconNormalVerifiedCheck2NameVerifiedCheckFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.286 8.786 C 14.638 8.434 14.638 7.865 14.286 7.513 C 13.935 7.162 13.365 7.162 13.013 7.513 L 9.15 11.377 L 7.786 10.013 C 7.435 9.662 6.865 9.662 6.514 10.013 C 6.162 10.364 6.162 10.934 6.513 11.286 L 8.513 13.286 C 8.682 13.455 8.911 13.549 9.15 13.549 C 9.388 13.549 9.617 13.455 9.786 13.286 L 14.286 8.786 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.600 1.600)\"/><path d=\"M 8.425 0.827 C 9.511 -0.276 11.289 -0.275 12.375 0.827 L 13.488 1.956 C 13.672 2.144 13.924 2.248 14.187 2.246 L 15.773 2.234 C 17.32 2.223 18.577 3.48 18.566 5.027 L 18.554 6.613 C 18.552 6.876 18.656 7.128 18.844 7.312 L 19.973 8.425 C 21.075 9.511 21.075 11.289 19.973 12.375 L 18.844 13.488 C 18.656 13.672 18.552 13.925 18.554 14.187 L 18.566 15.773 C 18.577 17.32 17.32 18.577 15.773 18.566 L 14.187 18.554 C 13.924 18.552 13.672 18.656 13.487 18.844 L 12.375 19.973 C 11.289 21.076 9.511 21.076 8.425 19.973 L 7.312 18.844 C 7.128 18.656 6.875 18.552 6.613 18.554 L 5.027 18.566 C 3.48 18.577 2.223 17.32 2.234 15.773 L 2.246 14.187 C 2.248 13.925 2.144 13.672 1.956 13.488 L 0.827 12.375 C -0.276 11.289 -0.276 9.511 0.827 8.425 L 1.956 7.312 C 2.144 7.128 2.248 6.876 2.246 6.613 L 2.234 5.027 C 2.223 3.48 3.48 2.223 5.027 2.234 L 6.613 2.246 C 6.875 2.248 7.128 2.144 7.312 1.956 L 8.425 0.827 Z M 11.092 2.09 C 10.712 1.703 10.088 1.703 9.708 2.09 L 8.595 3.22 C 8.069 3.754 7.349 4.052 6.599 4.046 L 5.013 4.034 C 4.471 4.03 4.03 4.471 4.034 5.013 L 4.046 6.599 C 4.052 7.349 3.754 8.069 3.22 8.595 L 2.09 9.708 C 1.703 10.088 1.703 10.712 2.09 11.092 L 3.22 12.205 C 3.754 12.731 4.052 13.451 4.046 14.201 L 4.034 15.787 C 4.03 16.329 4.471 16.77 5.013 16.766 L 6.599 16.754 C 7.349 16.748 8.069 17.046 8.595 17.58 L 9.708 18.71 C 10.088 19.097 10.712 19.097 11.092 18.71 L 12.205 17.58 C 12.731 17.046 13.451 16.748 14.201 16.754 L 15.787 16.766 C 16.329 16.77 16.77 16.329 16.766 15.787 L 16.754 14.201 C 16.748 13.451 17.046 12.731 17.58 12.205 L 18.71 11.092 C 19.097 10.712 19.097 10.088 18.71 9.708 L 17.58 8.595 C 17.046 8.069 16.748 7.349 16.754 6.599 L 16.766 5.013 C 16.77 4.471 16.329 4.03 15.787 4.034 L 14.201 4.046 C 13.451 4.052 12.731 3.753 12.205 3.22 L 11.092 2.09 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.600 1.600)\"/>"
    },
    "IconNormalVerifiedCheck2NameVerifiedCheckFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.425 0.827 C 9.511 -0.276 11.289 -0.275 12.375 0.827 L 13.487 1.956 C 13.672 2.144 13.924 2.248 14.187 2.246 L 15.773 2.234 C 17.32 2.223 18.577 3.48 18.566 5.027 L 18.554 6.613 C 18.552 6.876 18.656 7.128 18.844 7.312 L 19.973 8.425 C 21.075 9.511 21.075 11.289 19.973 12.375 L 18.844 13.488 C 18.656 13.672 18.552 13.924 18.554 14.187 L 18.566 15.773 C 18.577 17.32 17.32 18.577 15.773 18.566 L 14.187 18.554 C 13.924 18.552 13.672 18.656 13.488 18.844 L 12.375 19.973 C 11.289 21.076 9.511 21.076 8.425 19.973 L 7.312 18.844 C 7.128 18.656 6.876 18.552 6.613 18.554 L 5.027 18.566 C 3.48 18.577 2.223 17.32 2.234 15.773 L 2.246 14.187 C 2.248 13.925 2.144 13.672 1.956 13.488 L 0.827 12.375 C -0.276 11.289 -0.276 9.511 0.827 8.425 L 1.956 7.312 C 2.144 7.128 2.248 6.876 2.246 6.613 L 2.234 5.027 C 2.223 3.48 3.48 2.223 5.027 2.234 L 6.613 2.246 C 6.875 2.248 7.128 2.144 7.312 1.956 L 8.425 0.827 Z M 14.786 8.536 C 15.138 8.184 15.138 7.615 14.786 7.263 C 14.435 6.912 13.865 6.912 13.514 7.263 L 9.15 11.627 L 7.286 9.763 C 6.935 9.412 6.365 9.412 6.014 9.763 C 5.662 10.114 5.662 10.684 6.014 11.036 L 8.513 13.536 C 8.682 13.705 8.911 13.799 9.15 13.799 C 9.388 13.799 9.617 13.705 9.786 13.536 L 14.786 8.536 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.600 1.600)\"/>"
    },
    "IconNormalVerifiedStarNameVerifiedStarFillFalse": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 14.281 0.884 C 13.732 0.066 12.644 -0.235 11.734 0.196 L 10.165 0.942 L 10.126 0.954 C 10.099 0.958 10.071 0.955 10.047 0.943 L 8.478 0.197 L 8.306 0.125 C 7.376 -0.217 6.312 0.162 5.833 1.046 L 5.016 2.543 L 4.996 2.567 C 4.979 2.582 4.956 2.594 4.93 2.598 L 3.215 2.891 L 3.04 2.929 C 2.069 3.183 1.42 4.119 1.567 5.126 L 1.811 6.805 L 1.807 6.837 L 1.787 6.867 L 0.576 8.085 L 0.441 8.235 C -0.189 9.009 -0.144 10.139 0.576 10.862 L 1.788 12.082 L 1.808 12.111 L 1.811 12.143 L 1.567 13.822 L 1.549 13.999 C 1.494 14.996 2.207 15.885 3.215 16.057 L 4.933 16.35 L 4.968 16.361 C 4.989 16.371 5.005 16.386 5.014 16.403 L 5.834 17.904 L 5.93 18.063 C 6.48 18.881 7.568 19.183 8.478 18.751 L 10.045 18.005 L 10.085 17.993 C 10.112 17.989 10.14 17.993 10.164 18.005 L 11.732 18.751 L 11.905 18.823 C 12.836 19.164 13.898 18.785 14.378 17.903 L 15.439 15.958 L 15.493 15.841 C 15.659 15.405 15.482 14.902 15.061 14.672 C 14.602 14.422 14.026 14.591 13.776 15.05 L 12.714 16.996 L 12.685 17.028 C 12.649 17.054 12.593 17.062 12.545 17.039 L 10.979 16.294 L 10.792 16.216 C 10.286 16.034 9.721 16.06 9.23 16.295 L 7.664 17.04 L 7.615 17.052 C 7.566 17.056 7.517 17.033 7.497 16.997 L 6.679 15.497 L 6.573 15.325 C 6.27 14.881 5.793 14.576 5.254 14.483 L 3.533 14.189 L 3.491 14.175 C 3.456 14.156 3.438 14.124 3.442 14.096 L 3.686 12.414 L 3.705 12.21 C 3.726 11.667 3.521 11.138 3.133 10.747 L 1.919 9.526 L 1.898 9.491 C 1.89 9.468 1.897 9.443 1.919 9.422 L 3.132 8.202 L 3.269 8.049 C 3.611 7.624 3.765 7.077 3.686 6.534 L 3.442 4.853 L 3.445 4.824 C 3.455 4.794 3.486 4.767 3.533 4.759 L 5.251 4.466 L 5.451 4.421 C 5.974 4.275 6.419 3.927 6.679 3.449 L 7.497 1.951 L 7.525 1.92 C 7.561 1.893 7.617 1.885 7.665 1.908 L 9.231 2.653 L 9.418 2.731 C 9.925 2.914 10.489 2.888 10.981 2.653 L 12.546 1.908 L 12.596 1.895 C 12.645 1.891 12.694 1.914 12.713 1.95 L 13.532 3.45 L 13.638 3.623 C 13.944 4.067 14.419 4.372 14.957 4.465 L 16.678 4.759 L 16.719 4.773 C 16.756 4.792 16.774 4.825 16.769 4.854 L 16.525 6.533 L 16.506 6.737 C 16.485 7.281 16.691 7.811 17.08 8.202 L 18.291 9.421 L 18.313 9.455 C 18.32 9.479 18.313 9.504 18.292 9.525 L 17.079 10.746 L 16.942 10.899 C 16.6 11.322 16.446 11.869 16.525 12.414 L 16.913 15.086 L 16.94 15.212 C 17.069 15.661 17.512 15.957 17.987 15.888 C 18.505 15.812 18.863 15.332 18.788 14.814 L 18.4 12.142 L 18.403 12.112 L 18.423 12.082 L 19.636 10.861 L 19.77 10.711 C 20.4 9.938 20.355 8.808 19.635 8.085 L 18.424 6.866 L 18.403 6.836 L 18.4 6.805 L 18.644 5.126 L 18.662 4.949 C 18.716 3.951 18.003 3.063 16.996 2.891 L 15.278 2.598 L 15.243 2.587 C 15.222 2.576 15.205 2.56 15.194 2.541 L 14.377 1.044 L 14.281 0.884 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.895 2.526)\"/><path d=\"M 8.106 7.011 L 6.541 7.283 L 6.392 7.317 C 5.38 7.6 5.021 8.899 5.761 9.683 L 6.896 10.887 L 6.654 12.569 L 6.641 12.71 C 6.589 13.777 7.702 14.57 8.696 14.051 L 10.105 13.314 L 11.513 14.051 L 11.643 14.111 C 12.646 14.518 13.712 13.659 13.557 12.571 L 13.313 10.887 L 14.45 9.683 L 14.548 9.568 C 15.185 8.738 14.742 7.466 13.665 7.282 L 12.102 7.009 L 11.366 5.526 C 10.845 4.474 9.365 4.474 8.845 5.526 L 8.106 7.011 Z M 10.104 7.246 L 10.512 8.068 L 10.597 8.214 C 10.812 8.543 11.151 8.771 11.543 8.836 L 12.489 9 L 11.785 9.748 L 11.679 9.874 C 11.452 10.18 11.353 10.564 11.407 10.944 L 11.549 11.931 L 10.752 11.514 L 10.596 11.445 C 10.226 11.307 9.816 11.33 9.463 11.512 L 8.659 11.931 L 8.802 10.946 L 8.816 10.783 C 8.828 10.402 8.691 10.031 8.429 9.751 L 7.721 9 L 8.676 8.834 C 9.117 8.761 9.498 8.471 9.698 8.065 L 10.104 7.246 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 2.526)\"/>"
    },
    "IconNormalVerifiedStarNameVerifiedStarFillFillTrue": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.3 18.759 L 9.993 17.901 C 10.063 17.866 10.147 17.866 10.218 17.901 L 11.91 18.759 L 11.932 18.77 C 12.778 19.184 13.807 18.849 14.23 18.022 L 15.084 16.357 C 15.119 16.287 15.187 16.239 15.266 16.227 L 17.151 15.949 L 17.175 15.945 C 18.108 15.794 18.739 14.932 18.585 14.02 L 18.273 12.183 C 18.26 12.106 18.286 12.028 18.343 11.973 L 19.7 10.666 L 19.718 10.649 C 20.382 9.99 20.374 8.931 19.7 8.282 L 18.343 6.974 C 18.286 6.919 18.26 6.841 18.273 6.765 L 18.585 4.927 L 18.589 4.903 C 18.73 3.989 18.086 3.136 17.151 2.998 L 15.266 2.72 C 15.187 2.709 15.119 2.66 15.084 2.591 L 14.23 0.925 L 14.219 0.903 C 13.784 0.083 12.75 -0.237 11.91 0.188 L 10.218 1.046 C 10.147 1.082 10.063 1.082 9.993 1.046 L 8.3 0.188 L 8.278 0.177 C 7.432 -0.236 6.404 0.098 5.98 0.925 L 5.127 2.591 C 5.091 2.66 5.023 2.709 4.945 2.72 L 3.06 2.998 L 3.035 3.002 C 2.102 3.153 1.471 4.015 1.626 4.927 L 1.938 6.765 C 1.951 6.841 1.925 6.919 1.868 6.974 L 0.51 8.282 L 0.493 8.299 C -0.171 8.957 -0.163 10.017 0.51 10.666 L 1.868 11.973 C 1.925 12.028 1.951 12.106 1.938 12.183 L 1.626 14.02 L 1.622 14.044 C 1.481 14.958 2.125 15.811 3.06 15.949 L 4.945 16.227 C 5.023 16.239 5.091 16.287 5.127 16.357 L 5.98 18.022 L 5.991 18.044 C 6.427 18.864 7.461 19.185 8.3 18.759 Z M 11.361 7.646 L 10.517 5.946 C 10.344 5.597 9.867 5.597 9.694 5.946 L 8.849 7.646 C 8.782 7.782 8.657 7.877 8.514 7.901 L 6.704 8.216 C 6.334 8.28 6.186 8.753 6.45 9.033 L 7.737 10.398 C 7.839 10.507 7.886 10.659 7.865 10.811 L 7.592 12.704 C 7.536 13.094 7.921 13.387 8.257 13.211 L 9.898 12.353 C 10.028 12.286 10.182 12.286 10.312 12.353 L 11.952 13.211 C 12.288 13.387 12.675 13.094 12.619 12.704 L 12.345 10.811 C 12.323 10.659 12.371 10.507 12.474 10.398 L 13.761 9.033 C 14.025 8.753 13.877 8.28 13.506 8.216 L 11.697 7.901 C 11.553 7.877 11.429 7.782 11.361 7.646 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.895 2.526)\"/>"
    },
    "IconNormalVideoNameVideo": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 5.662 0 C 4.854 0 4.193 0 3.656 0.044 C 3.1 0.089 2.598 0.186 2.129 0.425 C 1.396 0.799 0.799 1.396 0.425 2.129 C 0.186 2.598 0.089 3.1 0.044 3.656 C 0 4.193 0 4.854 0 5.662 L 0 10.138 C 0 10.946 0 11.607 0.044 12.144 C 0.089 12.7 0.186 13.202 0.425 13.671 C 0.799 14.404 1.396 15.001 2.129 15.375 C 2.598 15.614 3.1 15.711 3.656 15.756 C 4.193 15.8 4.854 15.8 5.662 15.8 L 11.138 15.8 C 11.946 15.8 12.607 15.8 13.144 15.756 C 13.7 15.711 14.202 15.614 14.671 15.375 C 15.404 15.001 16.001 14.404 16.375 13.671 C 16.614 13.202 16.711 12.7 16.756 12.144 C 16.773 11.931 16.784 11.7 16.79 11.448 L 19.135 13.612 C 19.533 13.979 19.876 14.296 20.166 14.519 C 20.443 14.733 20.829 14.99 21.304 15.014 C 21.901 15.045 22.477 14.792 22.859 14.333 C 23.164 13.968 23.236 13.51 23.267 13.161 C 23.3 12.797 23.3 12.33 23.3 11.788 L 23.3 4.014 C 23.3 3.472 23.3 3.005 23.267 2.641 C 23.236 2.292 23.164 1.834 22.859 1.468 C 22.477 1.009 21.901 0.757 21.304 0.787 C 20.829 0.811 20.443 1.069 20.166 1.283 C 19.876 1.506 19.533 1.822 19.135 2.19 L 16.79 4.354 C 16.784 4.101 16.774 3.869 16.756 3.656 C 16.711 3.1 16.614 2.598 16.375 2.129 C 16.001 1.396 15.404 0.799 14.671 0.425 C 14.202 0.186 13.7 0.089 13.144 0.044 C 12.607 0 11.946 0 11.138 0 L 5.662 0 Z M 16.8 8.815 L 16.8 6.987 C 16.8 6.919 16.801 6.875 16.803 6.839 C 16.803 6.823 16.804 6.813 16.805 6.808 C 16.807 6.802 16.809 6.796 16.813 6.79 C 16.816 6.786 16.823 6.778 16.834 6.767 C 16.871 6.729 16.924 6.68 17.025 6.587 L 20.325 3.541 C 20.763 3.137 21.046 2.877 21.264 2.709 C 21.348 2.644 21.403 2.609 21.434 2.591 C 21.438 2.592 21.442 2.594 21.446 2.596 C 21.453 2.631 21.465 2.696 21.474 2.801 C 21.499 3.075 21.5 3.46 21.5 4.055 L 21.5 11.747 C 21.5 12.342 21.499 12.727 21.474 13 C 21.465 13.106 21.453 13.171 21.446 13.206 C 21.442 13.208 21.438 13.209 21.434 13.211 C 21.403 13.193 21.348 13.158 21.264 13.093 C 21.046 12.925 20.763 12.665 20.325 12.261 L 17.025 9.215 C 16.924 9.122 16.871 9.073 16.834 9.035 C 16.823 9.023 16.816 9.016 16.813 9.012 C 16.809 9.006 16.807 9 16.805 8.994 C 16.804 8.989 16.803 8.979 16.803 8.963 C 16.801 8.927 16.8 8.882 16.8 8.815 Z M 15 6.917 L 15 5.7 C 15 4.845 14.999 4.258 14.962 3.803 C 14.926 3.358 14.859 3.119 14.771 2.947 C 14.57 2.551 14.249 2.23 13.853 2.029 C 13.681 1.941 13.442 1.874 12.997 1.838 C 12.542 1.801 11.955 1.8 11.1 1.8 L 5.7 1.8 C 4.845 1.8 4.258 1.801 3.803 1.838 C 3.358 1.874 3.119 1.941 2.947 2.029 C 2.551 2.23 2.23 2.551 2.029 2.947 C 1.941 3.119 1.874 3.358 1.838 3.803 C 1.801 4.258 1.8 4.845 1.8 5.7 L 1.8 10.1 C 1.8 10.955 1.801 11.542 1.838 11.997 C 1.874 12.442 1.941 12.681 2.029 12.853 C 2.23 13.249 2.551 13.57 2.947 13.771 C 3.119 13.859 3.358 13.926 3.803 13.962 C 4.258 13.999 4.845 14 5.7 14 L 11.1 14 C 11.955 14 12.542 13.999 12.997 13.962 C 13.442 13.926 13.681 13.859 13.853 13.771 C 14.249 13.57 14.57 13.249 14.771 12.853 C 14.859 12.681 14.926 12.442 14.962 11.997 C 14.999 11.542 15 10.955 15 10.1 L 15 8.885 C 15 8.84 15 8.796 15 8.753 L 15 8.7 L 15 7.101 L 15 7.048 C 15 7.006 15 6.962 15 6.917 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.350 4.100)\"/>"
    },
    "IconNormalWriteNameWrite": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 18.286 0.781 C 17.245 -0.26 15.556 -0.26 14.514 0.781 L 5.264 10.031 C 5.095 10.2 5 10.429 5 10.668 L 5 13.168 C 5 13.665 5.403 14.068 5.9 14.068 L 8.4 14.068 C 8.639 14.068 8.868 13.973 9.037 13.804 L 18.286 4.554 C 19.328 3.512 19.328 1.823 18.286 0.781 Z M 15.786 2.054 C 16.125 1.715 16.675 1.715 17.014 2.054 C 17.352 2.393 17.352 2.942 17.014 3.281 L 8.027 12.268 L 6.8 12.268 L 6.8 11.041 L 15.786 2.054 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.100 1.833)\"/><path d=\"M 9.003 1.271 C 9.498 1.271 9.9 1.672 9.9 2.168 C 9.9 2.663 9.498 3.065 9.003 3.065 L 3.7 3.065 C 2.886 3.065 2.692 3.076 2.56 3.119 C 2.225 3.228 1.963 3.49 1.854 3.825 C 1.811 3.957 1.8 4.151 1.8 4.965 L 1.8 15.365 C 1.8 16.18 1.811 16.374 1.854 16.505 C 1.963 16.84 2.225 17.103 2.56 17.211 C 2.692 17.254 2.886 17.265 3.7 17.265 L 14.1 17.265 C 14.915 17.265 15.108 17.254 15.24 17.211 C 15.575 17.103 15.837 16.84 15.946 16.505 C 15.989 16.374 16 16.18 16 15.365 L 16 10.068 C 16 9.571 16.403 9.168 16.9 9.168 C 17.397 9.168 17.8 9.571 17.8 10.068 L 17.8 15.006 C 17.8 15.536 17.8 15.987 17.77 16.358 C 17.738 16.747 17.668 17.125 17.484 17.487 C 17.206 18.033 16.762 18.477 16.217 18.755 C 15.855 18.939 15.476 19.009 15.087 19.04 C 14.716 19.071 14.265 19.071 13.735 19.071 L 4.065 19.071 C 3.535 19.071 3.084 19.071 2.713 19.04 C 2.324 19.009 1.945 18.939 1.583 18.755 C 1.038 18.477 0.594 18.033 0.316 17.487 C 0.132 17.125 0.062 16.747 0.03 16.358 C 0 15.987 0 15.536 0 15.006 L 0 5.335 C 0 4.805 0 4.354 0.03 3.984 C 0.062 3.595 0.132 3.216 0.316 2.854 C 0.594 2.308 1.038 1.865 1.583 1.587 C 1.945 1.402 2.324 1.333 2.713 1.301 C 3.084 1.271 3.535 1.271 4.064 1.271 L 9.003 1.271 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.100 1.833)\"/>"
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_components_icon_icon_data_dzztcy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/icon-data.js", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Friendly aliases → generated data keys.
 * Base name = outline glyph; `-fill` = filled; `-bold` = thick stroke.
 * (The raw generated keys in icon-data.js also work as `name`.)
 */
const iconAliases = {
  // Brand / social logos
  "logo-google": "IconColorLogoGoogleNameLogoGoogle",
  "logo-apple": "IconNormalLogoAppleNameLogoApple",
  "logo-facebook": "IconNormalLogoFacebookNameLogoFacebook",
  "logo-instagram": "IconNormalLogoInstagramNameLogoInstagram",
  "logo-kakao": "IconNormalLogoKakaoNameLogoKakao",
  "logo-linkedin": "IconNormalLogoLinkedInNameLogoLinkedIn",
  "logo-naver-blog": "IconNormalLogoNaverBlogNameLogoNaverBlog",
  "logo-youtube": "IconNormalLogoYouTubeNameLogoYoutube",
  // Bottom-nav glyphs
  "nav-recruit": "IconNavigationRecruitNameNavigationRecruit",
  "nav-career": "IconNavigationCareerNameNavigationCareer",
  "nav-social": "IconNavigationSocialNameNavigationSocial",
  "nav-mypage": "IconNavigationMyPageNameNavigationMypage",
  "nav-menu": "IconNavigationMenuNameNavigationMenu",
  // Arrows & chevrons
  "arrow-up": "IconNormalArrowUp2NameArrowUpThickFalse",
  "arrow-down": "IconNormalArrowDownNameArrowDownThickFalse",
  "arrow-left": "IconNormalArrowLeftNameArrowLeftThickFalse",
  "arrow-right": "IconNormalArrowRightNameArrowRightThickFalse",
  "arrow-up-right": "IconNormalArrowUpRightNameArrowUpRightThickFalse",
  "chevron-up": "IconNormalChevronUpNameChevronUpThickFalseSmall",
  "chevron-down": "IconNormalChevronDownNameChevronDownThickFalseSmall",
  "chevron-left": "IconNormalChevronLeftNameChevronLeftTightFalseThick",
  "chevron-right": "IconNormalChevronRightNameChevronRightTightFalseThick",
  "caret-up": "IconNormalCaretUpNameCaretUp",
  "caret-down": "IconNormalCaretDownNameCaretDown",
  // Core actions
  "check": "IconNormalCheckNameCheckThickFalse",
  "check-bold": "IconNormalCheckNameCheckThickThickTrue",
  "close": "IconNormalCloseNameCloseThickFalse",
  "close-bold": "IconNormalCloseNameCloseThickThickTrue",
  "plus": "IconNormalPlusNamePlusThickFalse",
  "plus-bold": "IconNormalPlusNamePlusThickThickTrue",
  "minus": "IconNormalMinusNameMinusThickFalse",
  "search": "IconNormalSearchNameSearchThickFalse",
  "search-bold": "IconNormalSearchNameSearchThickThickTrue",
  "menu": "IconNormalMenu2NameMenuThickFalse",
  "more-horizontal": "IconNormalMoreHorizontalNameMoreHorizontal",
  "more-vertical": "IconNormalMoreVertical2NameMoreVerticalTightFalse",
  "filter": "IconNormalFilterNameFilterFillFalse",
  "filter-fill": "IconNormalFilterNameFilterFillFillTrue",
  "setting": "IconNormalSettingNameSetting",
  "tune": "IconNormalTuneNameTune",
  "refresh": "IconNormalRefreshNameRefresh",
  "history": "IconNormalHistoryNameHistory",
  "copy": "IconNormalCopyNameCopy",
  "share": "IconNormalShareNameShare",
  "link": "IconNormalLinkNameLink",
  "external-link": "IconNormalExternalLinkNameExternalLink",
  "download": "IconNormalDownloadNameDownload",
  "upload": "IconNormalUploadNameUpload",
  "trash": "IconNormalTrashNameTrash",
  "pencil": "IconNormalPencil2NamePencilFillFalse",
  "write": "IconNormalWriteNameWrite",
  "list": "IconNormalListNameList",
  "apps": "IconNormalApps2NameApps",
  "inbox": "IconNormalInboxNameInbox",
  // Status / circle
  "circle": "IconNormalCircleNameCircleFillFalse",
  "circle-check": "IconNormalCircleCheck2NameCircleCheckFillFalse",
  "circle-check-fill": "IconNormalCircleCheck2NameCircleCheckFillFillTrue",
  "circle-close": "IconNormalCircleClose2NameCircleCloseFillFalse",
  "circle-close-fill": "IconNormalCircleClose2NameCircleCloseFillFillTrue",
  "circle-info": "IconNormalCircleInfo2NameCircleInfoFillFalse",
  "circle-info-fill": "IconNormalCircleInfo2NameCircleInfoFillFillTrue",
  "circle-exclamation": "IconNormalCircleExclamation2NameCircleExclamationFillFalse",
  "circle-question": "IconNormalCircleQuestion2NameCircleQuestionFillFalse",
  "circle-plus": "IconNormalCirclePlus2NameCirclePlusFillFalse",
  // Objects & content
  "bell": "IconNormalBell2NameBellFillFalse",
  "bell-fill": "IconNormalBell2NameBellFillFillTrue",
  "bookmark": "IconNormalBookmarkNameBookmarkFillFalse",
  "bookmark-fill": "IconNormalBookmarkNameBookmarkFillFillTrue",
  "heart": "IconNormalHeartNameHeartFillFalse",
  "heart-fill": "IconNormalHeartNameHeartFillFillTrue",
  "star": "IconNormalStarNameStarFillFalse",
  "star-fill": "IconNormalStarNameStarFillFillTrue",
  "like": "IconNormalLikeNameLikeFillFalse",
  "dislike": "IconNormalDislikeNameDislikeFillFalse",
  "bubble": "IconNormalBubbleNameBubbleFillFalse",
  "message": "IconNormalMessageNameMessageFillFalse",
  "send": "IconNormalSendNameSendFillFalse",
  "mail": "IconNormalMailNameMail",
  "phone": "IconNormalPhoneNamePhoneFillFalse",
  "person": "IconNormalPersonsNamePersonsFillFalse",
  "persons": "IconNormalPersonsNamePersonsFillFalse",
  "person-plus": "IconNormalPersonPlus2NamePersonPlusFillFalse",
  "company": "IconNormalCompany2NameCompanyFillFalse",
  "company-fill": "IconNormalCompany2NameCompanyFillFillTrue",
  "home": "IconNormalHomeNameHomeFillFalse",
  "home-fill": "IconNormalHomeNameHomeFillFillTrue",
  "business-bag": "IconNormalBusinessBagNameBusinessBagFillFalse",
  "business-bag-fill": "IconNormalBusinessBagNameBusinessBagFillFillTrue",
  "document": "IconNormalDocument2NameDocumentFillFalse",
  "document-text": "IconNormalDocumentTextNameDocumentTextFillFalse",
  "document-person": "IconNormalDocumentPersonNameDocumentPersonFillFalse",
  "folder": "IconNormalFolderNameFolderFillFalse",
  "folder-job": "IconNormalFolderJobNameFolderJobFillFalse",
  "location": "IconNormalLocation2NameLocationFillFalse",
  "location-fill": "IconNormalLocation2NameLocationFillFillTrue",
  "pin": "IconNormalPin2NamePinFillFalse",
  "clock": "IconNormalClockNameClockFillFalse",
  "calendar": "IconNormalCalendarNameCalendar",
  "calendar-person": "IconNormalCalendarPersonNameCalendarPerson",
  "coins": "IconNormalCoinsNameCoinsFillFalse",
  "diamond": "IconNormalDiamondNameDiamondFillFalse",
  "crown": "IconNormalCrownNameCrownFillFalse",
  "ticket": "IconNormalTicketNameTicketFillFalse",
  "tag": "IconNormalTag2NameTagFillFalse",
  "fire": "IconNormalFireNameFireFillFalse",
  "thunder": "IconNormalThunderNameThunderFillFalse",
  "thunder-fill": "IconNormalThunderNameThunderFillFillTrue",
  "sparkle": "IconNormalSparkleNameSparkle",
  "sparkle-fill": "IconNormalSparkle2NameSparkleFillFalse",
  "magic-wand": "IconNormalMagicWandNameMagicWand",
  "megaphone": "IconNormalMegaphoneNameMegaphoneFillFalse",
  "trophy": "IconNormalTrophyNameTrophyFillFalse",
  "graduation": "IconNormalGraduationNameGraduationFillFalse",
  "compass": "IconNormalCompassNameCompassFillFalse",
  "flag": "IconNormalFlagNameFlagFillFalse",
  "globe": "IconNormalGlobe2NameGlobeFillFalse",
  "face-smile": "IconNormalFaceSmileNameFaceSmileFillFalse",
  "verified-check": "IconNormalVerifiedCheck2NameVerifiedCheckFillFalse",
  "verified-star": "IconNormalVerifiedStarNameVerifiedStarFillFalse",
  "eye": "IconNormalEyeNameEyeFillFalse",
  "eye-slash": "IconNormalEyeSlashNameEyeSlashFillFalse",
  "lock": "IconNormalLock2NameLockFillFalse",
  "lock-open": "IconNormalLockOpen2NameLockOpenFillFalse",
  "login": "IconNormalLoginNameLogin",
  "logout": "IconNormalLogoutNameLogout",
  "camera": "IconNormalCameraNameCameraFillFalse",
  "image": "IconNormalImageNameImage",
  "video": "IconNormalVideoNameVideo",
  "play": "IconNormalPlayNamePlay",
  "pause": "IconNormalPauseNamePause"
};
function Icon({
  name,
  size = 24,
  color,
  ...rest
}) {
  const key = __ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2[name] ? name : iconAliases[name];
  const d = key && __ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2[key];
  if (!d) return null;
  const style = color ? {
    color,
    ...(rest.style || {})
  } : rest.style;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    "aria-hidden": rest['aria-label'] ? undefined : true
    // body strings are emitter-controlled <path> markup — geometry,
    // numeric fills and transforms only; no .fig-authored text reaches them.
    ,
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest, {
    style: style
  }));
}
Object.assign(__ds_scope, { iconAliases, Icon, __ds_default_components_icon_Icon_e7wouz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
};

/**
 * Avatar — circular (person) or squircle (company) image with graceful
 * fallback to an initial or an icon. Sizes xsmall(24) → xlarge(64).
 */
function Avatar({
  src,
  name = "",
  variant = "person",
  size = "medium",
  alt,
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.medium;
  const [broken, setBroken] = React.useState(false);
  const radius = variant === "company" ? Math.round(px * 0.28) : "50%";
  const initial = (name || "").trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: radius,
      overflow: "hidden",
      flexShrink: 0,
      background: "var(--fill-normal)",
      color: "var(--label-alternative)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
      ...style
    }
  }), src && !broken ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name,
    onError: () => setBroken(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initial ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body2-normal)",
      fontSize: Math.round(px * 0.42)
    }
  }, initial) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: variant === "company" ? "company" : "person",
    size: Math.round(px * 0.56)
  }));
}

/** Overlapping stack of avatars with an optional "+N" overflow token. */
function AvatarGroup({
  children,
  size = "medium",
  max = 4,
  style
}) {
  const items = React.Children.toArray(children);
  const px = SIZES[size] || SIZES.medium;
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.28,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--background-normal-normal)"
    }
  }, React.isValidElement(child) ? React.cloneElement(child, {
    size
  }) : child)), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.28,
      width: px,
      height: px,
      borderRadius: "50%",
      background: "var(--fill-strong)",
      color: "var(--label-normal)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--font-label2)",
      boxShadow: "0 0 0 2px var(--background-normal-normal)"
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup, __ds_default_components_display_Avatar_1dmo83i: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/ListCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ListCell — a tappable list row: optional leading node, title + subtitle,
 * optional trailing value/node and a chevron. The workhorse of settings and
 * menu screens.
 */
function ListCell({
  leading = null,
  title,
  subtitle = null,
  value = null,
  trailing = null,
  chevron = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick
  }, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      boxSizing: "border-box",
      cursor: onClick ? "pointer" : "default",
      background: "transparent",
      ...style
    }
  }), leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0,
      color: "var(--label-neutral)"
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body1-normal)",
      letterSpacing: "var(--tracking-body1)",
      color: "var(--label-normal)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label2)",
      letterSpacing: "var(--tracking-label2)",
      color: "var(--label-alternative)",
      marginTop: 2
    }
  }, subtitle)), value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label1-normal)",
      color: "var(--label-alternative)",
      flexShrink: 0
    }
  }, value), trailing, chevron && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--label-assistive)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })));
}
Object.assign(__ds_scope, { ListCell, __ds_default_components_display_ListCell_l7cuaj: ListCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ListCell.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: "circle-info-fill",
    fg: "var(--primary-normal)",
    bg: "rgba(0,102,255,0.06)"
  },
  positive: {
    icon: "circle-check-fill",
    fg: "var(--status-positive)",
    bg: "rgba(0,191,64,0.07)"
  },
  negative: {
    icon: "circle-close-fill",
    fg: "var(--status-negative)",
    bg: "rgba(255,66,66,0.07)"
  },
  cautionary: {
    icon: "circle-info-fill",
    fg: "var(--status-cautionary)",
    bg: "rgba(255,150,0,0.08)"
  }
};

/**
 * Alert — inline banner with a leading status icon, title/description and an
 * optional dismiss. `tone` sets the icon + accent.
 */
function Alert({
  title,
  children,
  tone = "info",
  onClose,
  action = null,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert"
  }, rest, {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      boxSizing: "border-box",
      padding: 14,
      borderRadius: 12,
      background: t.bg,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: "inline-flex",
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label1-normal)",
      letterSpacing: "var(--tracking-label1)",
      color: "var(--label-normal)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label1-reading)",
      letterSpacing: "var(--tracking-label1)",
      color: "var(--label-alternative)",
      marginTop: title ? 2 : 0
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--label-assistive)",
      cursor: "pointer",
      display: "inline-flex",
      padding: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert, __ds_default_components_feedback_Alert_s1ujgm: Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — dropdown picker. `options` = [{value,label}] (or strings). Opens a
 * menu below the trigger; matches TextField sizing.
 */
function Select({
  options = [],
  value,
  onChange,
  placeholder = "선택",
  disabled = false,
  size = "large",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const h = size === "medium" ? 44 : 52;
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const current = norm.find(o => o.value === value);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      height: h,
      padding: "0 16px",
      borderRadius: 12,
      boxSizing: "border-box",
      background: "var(--background-normal-normal)",
      border: `1px solid ${open ? "var(--primary-normal)" : "var(--line-normal-normal)"}`,
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      color: current ? "var(--label-normal)" : "var(--label-assistive)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--label-alternative)",
      display: "inline-flex",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 140ms ease"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20
  }))), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: "absolute",
      top: h + 6,
      left: 0,
      right: 0,
      zIndex: 20,
      padding: 6,
      background: "var(--background-elevated-normal)",
      borderRadius: 12,
      boxShadow: "0 4px 16px rgba(23,23,25,0.12), 0 1px 4px rgba(23,23,25,0.08)",
      maxHeight: 260,
      overflowY: "auto"
    }
  }, norm.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "option",
      "aria-selected": on,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        padding: "10px 10px",
        border: "none",
        borderRadius: 8,
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        font: "var(--font-body1-reading)",
        letterSpacing: "var(--tracking-body1)",
        color: "var(--label-normal)"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--fill-normal)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.label), on && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--primary-normal)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 18
    })));
  })));
}
Object.assign(__ds_scope, { Select, __ds_default_components_forms_Select_k3ngq8: Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TABS = [{
  key: "recruit",
  label: "채용",
  icon: "nav-recruit"
}, {
  key: "career",
  label: "커리어",
  icon: "nav-career"
}, {
  key: "social",
  label: "소셜",
  icon: "nav-social"
}, {
  key: "mypage",
  label: "MY",
  icon: "nav-mypage"
}];

/**
 * BottomNavigation — mobile tab bar. Pass `tabs` (defaults to Wanted's set) and
 * the active key; active tab paints primary.
 */
function BottomNavigation({
  tabs = TABS,
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "stretch",
      width: "100%",
      boxSizing: "border-box",
      background: "var(--background-normal-normal)",
      borderTop: "1px solid var(--line-normal-normal)",
      paddingBottom: 8,
      ...style
    }
  }), tabs.map(t => {
    const on = t.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange && onChange(t.key),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        border: "none",
        background: "transparent",
        padding: "8px 0 4px",
        cursor: "pointer",
        color: on ? "var(--label-normal)" : "var(--label-assistive)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? t.iconFill || t.icon : t.icon,
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--font-caption2)",
        letterSpacing: "var(--tracking-caption2)"
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { BottomNavigation, __ds_default_components_navigation_BottomNavigation_1b8y84e: BottomNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNavigation.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — a pill container of 2–4 options; the active segment sits
 * on a white raised chip. Good for compact view toggles.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = "medium",
  style,
  ...rest
}) {
  const h = size === "small" ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: "inline-flex",
      padding: 3,
      gap: 2,
      borderRadius: h / 2 + 3,
      background: "var(--fill-normal)",
      boxSizing: "border-box",
      ...style
    }
  }), options.map(o => {
    const key = typeof o === "string" ? o : o.key;
    const label = typeof o === "string" ? o : o.label;
    const on = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(key),
      style: {
        height: h,
        padding: "0 16px",
        border: "none",
        borderRadius: h / 2,
        cursor: "pointer",
        background: on ? "var(--background-elevated-normal)" : "transparent",
        boxShadow: on ? "0 1px 3px rgba(23,23,25,0.10)" : "none",
        color: on ? "var(--label-normal)" : "var(--label-alternative)",
        font: on ? "var(--font-label1-normal)" : "var(--font-label1-reading)",
        letterSpacing: "var(--tracking-label1)",
        transition: "background 140ms ease, color 140ms ease"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl, __ds_default_components_navigation_SegmentedControl_1y0kpw6: SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — underline navigation. `items` = [{key,label}]; active tab shows a
 * primary underline. Full-width or auto per `fitted`.
 */
function Tabs({
  items = [],
  value,
  onChange,
  fitted = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--line-normal-normal)",
      ...style
    }
  }), items.map(it => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.key),
      style: {
        flex: fitted ? 1 : "0 0 auto",
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "12px 16px",
        cursor: "pointer",
        font: on ? "var(--font-headline2)" : "var(--font-body1-normal)",
        letterSpacing: "var(--tracking-body1)",
        color: on ? "var(--label-normal)" : "var(--label-alternative)"
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? "var(--label-normal)" : "transparent"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs, __ds_default_components_navigation_Tabs_14bb2wz: Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/selection/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: 24,
  small: 20
};

/**
 * Checkbox control. state: false | true | "indeterminate".
 * Checked fill = primary; unchecked = outlined. Optional label.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  size = "medium",
  label = null,
  onChange,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.medium;
  const on = checked || indeterminate;
  const [hover, setHover] = React.useState(false);
  let bg = "transparent",
    border = "1.5px solid var(--line-normal-strong)",
    fg = "var(--static-white)";
  if (on) {
    bg = "var(--blue-50)";
    border = "1.5px solid var(--blue-50)";
  }
  if (disabled) {
    if (on) {
      bg = "var(--interaction-disable)";
      border = "1.5px solid var(--interaction-disable)";
      fg = "var(--label-disable)";
    } else border = "1.5px solid var(--line-normal-normal)";
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      color: disabled ? "var(--label-disable)" : "var(--label-normal)",
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      boxSizing: "border-box",
      width: box,
      height: box,
      borderRadius: box <= 20 ? 6 : 8,
      background: bg,
      border,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: fg,
      flexShrink: 0,
      transition: "background 120ms ease, border-color 120ms ease",
      boxShadow: hover && !disabled && !on ? "0 0 0 4px var(--fill-normal)" : "none"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: box - 8
  }) : checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-bold",
    size: box - 6
  })), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, __ds_default_components_selection_Checkbox_2gcziu: Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    h: 40,
    padX: 16,
    font: "var(--font-body2-normal)",
    icon: 18,
    gap: 4
  },
  medium: {
    h: 34,
    padX: 14,
    font: "var(--font-label1-normal)",
    icon: 16,
    gap: 4
  },
  small: {
    h: 28,
    padX: 12,
    font: "var(--font-label2)",
    icon: 14,
    gap: 2
  }
};

/**
 * Chip — filter / choice / action pill. Toggle `active` for selected state;
 * `variant` outlined | solid. Optional leadingIcon, count, removable close,
 * or a filter chevron.
 */
function Chip({
  children,
  active = false,
  variant = "outlined",
  size = "medium",
  disabled = false,
  leadingIcon = null,
  count = null,
  removable = false,
  filter = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const [hover, setHover] = React.useState(false);
  let bg, border, fg;
  if (active) {
    bg = "var(--accent-background-cyan, var(--blue-95))";
    bg = "rgba(0,102,255,0.08)";
    border = "1px solid var(--primary-normal)";
    fg = "var(--primary-normal)";
  } else if (variant === "solid") {
    bg = "var(--fill-normal)";
    border = "1px solid transparent";
    fg = "var(--label-normal)";
  } else {
    bg = "var(--background-normal-normal)";
    border = "1px solid var(--line-normal-normal)";
    fg = "var(--label-normal)";
  }
  if (disabled) {
    fg = "var(--label-disable)";
    border = "1px solid var(--line-normal-normal)";
    bg = "transparent";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      boxSizing: "border-box",
      height: s.h,
      padding: `0 ${s.padX}px`,
      borderRadius: s.h,
      border,
      background: bg,
      color: fg,
      font: s.font,
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer",
      filter: hover && !disabled ? "brightness(0.98)" : "none",
      transition: "background 120ms ease, border-color 120ms ease, color 120ms ease",
      outline: "none",
      ...style
    }
  }), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon,
      alignItems: "center",
      justifyContent: "center"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, children), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? "var(--primary-normal)" : "var(--label-alternative)",
      marginLeft: 2
    }
  }, count), filter && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: s.icon
  }), removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 2,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: s.icon
  })));
}
Object.assign(__ds_scope, { Chip, __ds_default_components_selection_Chip_gkd7ar: Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Chip.jsx", error: String((e && e.message) || e) }); }

// components/selection/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: 24,
  small: 20
};

/** Radio control. Single-select; checked = primary ring + dot. */
function Radio({
  checked = false,
  disabled = false,
  size = "medium",
  label = null,
  onChange,
  name,
  value,
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.medium;
  const [hover, setHover] = React.useState(false);
  let border = "1.5px solid var(--line-normal-strong)";
  if (checked) border = `${box * 0.28}px solid var(--blue-50)`;
  if (disabled) border = checked ? `${box * 0.28}px solid var(--interaction-disable)` : "1.5px solid var(--line-normal-normal)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      color: disabled ? "var(--label-disable)" : "var(--label-normal)",
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      boxSizing: "border-box",
      width: box,
      height: box,
      borderRadius: "50%",
      background: "var(--static-white)",
      border,
      flexShrink: 0,
      transition: "border 120ms ease",
      boxShadow: hover && !disabled && !checked ? "0 0 0 4px var(--fill-normal)" : "none"
    }
  }), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio, __ds_default_components_selection_Radio_1dqr2ke: Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Radio.jsx", error: String((e && e.message) || e) }); }

// components/selection/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    w: 52,
    h: 32,
    knob: 28
  },
  small: {
    w: 40,
    h: 24,
    knob: 20
  }
};

/** Toggle switch. Active track = primary; knob is white with a soft shadow. */
function Switch({
  active = false,
  disabled = false,
  size = "medium",
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const pad = (s.h - s.knob) / 2;
  let track = active ? "var(--blue-50)" : "var(--line-solid-strong)";
  if (disabled) track = active ? "var(--interaction-disable)" : "var(--line-solid-normal)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": active,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!active)
  }, rest, {
    style: {
      position: "relative",
      width: s.w,
      height: s.h,
      borderRadius: s.h,
      border: "none",
      background: track,
      cursor: disabled ? "not-allowed" : "pointer",
      padding: 0,
      transition: "background 160ms ease",
      outline: "none",
      flexShrink: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: pad,
      left: active ? s.w - s.knob - pad : pad,
      width: s.knob,
      height: s.knob,
      borderRadius: "50%",
      background: "var(--static-white)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.16), 0 0 1px rgba(0,0,0,0.12)",
      transition: "left 160ms cubic-bezier(0.4,0,0.2,1)"
    }
  }));
}
Object.assign(__ds_scope, { Switch, __ds_default_components_selection_Switch_8w67cx: Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/screens.jsx
try { (() => {
/* Wanted careers app — UI-kit screens. Loaded via Babel in index.html.
   Composes primitives from window.WantedDesignSystem_ec589a. */
const WDS = window.WantedDesignSystem_ec589a;
const {
  Icon,
  Button,
  IconButton,
  Chip,
  Badge,
  ContentBadge,
  Avatar,
  Card,
  Divider,
  TextField,
  BottomNavigation,
  Alert
} = WDS;
const JOBS = [{
  id: 1,
  role: "프론트엔드 개발자",
  company: "토스",
  loc: "서울 강남구",
  exp: "경력 3-5년",
  tags: ["React", "TypeScript"],
  reward: "1,000만원",
  logo: "#3182F6",
  badge: "인기",
  hot: true
}, {
  id: 2,
  role: "프로덕트 디자이너",
  company: "당근",
  loc: "서울 서초구",
  exp: "경력 무관",
  tags: ["Figma", "UX"],
  reward: "500만원",
  logo: "#FF6F0F",
  badge: "신규"
}, {
  id: 3,
  role: "백엔드 엔지니어",
  company: "네이버",
  loc: "성남 분당구",
  exp: "경력 5년+",
  tags: ["Kotlin", "MSA"],
  reward: "800만원",
  logo: "#03C75A"
}, {
  id: 4,
  role: "데이터 분석가",
  company: "쿠팡",
  loc: "서울 송파구",
  exp: "신입",
  tags: ["SQL", "Python"],
  reward: "700만원",
  logo: "#4B5CFA",
  badge: "마감임박"
}, {
  id: 5,
  role: "iOS 개발자",
  company: "배달의민족",
  loc: "서울 송파구",
  exp: "경력 3년+",
  tags: ["Swift", "SwiftUI"],
  reward: "900만원",
  logo: "#2AC1BC"
}];
const CATS = ["추천", "개발", "디자인", "기획", "마케팅", "데이터"];
function CompanyMark({
  color,
  size = 44
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.28,
      background: color,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "company-fill",
    size: size * 0.5
  }));
}
function JobRow({
  job,
  saved,
  onToggle,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: "flex",
      gap: 12,
      padding: "16px 20px",
      cursor: "pointer",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(CompanyMark, {
    color: job.logo
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 2
    }
  }, job.badge && /*#__PURE__*/React.createElement(ContentBadge, {
    color: job.badge === "마감임박" ? "red" : job.badge === "신규" ? "violet" : "blue",
    size: "small"
  }, job.badge), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-caption1)",
      color: "var(--label-alternative)"
    }
  }, job.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-headline2)",
      letterSpacing: "var(--tracking-headline2)",
      color: "var(--label-normal)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, job.role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label2)",
      color: "var(--label-alternative)",
      marginTop: 3
    }
  }, job.loc, " \xB7 ", job.exp), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8,
      alignItems: "center"
    }
  }, job.tags.map(t => /*#__PURE__*/React.createElement(ContentBadge, {
    key: t,
    color: "blue",
    size: "small"
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--font-label1-normal)",
      color: "var(--primary-normal)"
    }
  }, "\uD569\uACA9\uBCF4\uC0C1\uAE08 ", job.reward))), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onToggle(job.id);
    },
    style: {
      color: saved ? "var(--primary-normal)" : "var(--label-assistive)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: saved ? "bookmark-fill" : "bookmark",
    size: 22
  })));
}
function TopBar({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--background-normal-normal)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 3213 730",
    height: "18",
    fill: "var(--label-normal)",
    style: {
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2964 730 C 3027 730 3080 703 3109 661 L 3109 720 L 3213 720 L 3213 0 L 3109 0 L 3109 274 C 3080 235 3026 210 2963 210 C 2818 210 2707 327 2707 470 C 2707 613 2819 730 2964 730 Z M 2964 630 C 2879 630 2809 557 2809 470 C 2809 383 2879 310 2964 310 C 3049 310 3119 383 3119 470 C 3119 557 3049 630 2964 630 Z M 2269 428 C 2273 364 2336 303 2414 303 C 2492 303 2551 364 2555 428 L 2269 428 Z M 2423 730 C 2524 730 2612 672 2648 592 L 2565 564 C 2541 607 2485 637 2424 637 C 2336 637 2273 583 2269 510 L 2654 510 C 2674 342 2573 210 2423 210 C 2273 210 2167 317 2167 470 C 2167 623 2272 730 2423 730 Z M 2050 729 C 2081 729 2112 722 2132 711 L 2132 620 C 2108 632 2087 637 2073 637 C 2033 637 2013 613 2013 564 L 2013 302 L 2132 302 L 2132 220 L 2013 220 L 2013 120 L 1909 120 L 1909 220 L 1829 220 L 1829 302 L 1909 302 L 1909 568 C 1909 669 1961 729 2050 729 Z M 1337 720 L 1441 720 L 1441 436 C 1441 349 1490 300 1561 300 C 1632 300 1680 349 1680 436 L 1680 720 L 1784 720 L 1784 430 C 1784 289 1719 210 1593 210 C 1526 210 1466 237 1441 284 L 1441 220 L 1337 220 L 1337 720 Z M 998 630 C 913 630 843 557 843 470 C 843 383 913 310 998 310 C 1083 310 1153 383 1153 470 C 1153 557 1083 630 998 630 Z M 998 730 C 1061 730 1114 703 1143 661 L 1143 720 L 1247 720 L 1247 220 L 1143 220 L 1143 274 C 1114 235 1060 210 997 210 C 852 210 741 327 741 470 C 741 613 853 730 998 730 Z M 176 720 L 275 720 L 368 440 L 461 720 L 560 720 L 736 220 L 627 220 L 512 572 L 407 220 L 329 220 L 224 572 L 109 220 L 0 220 L 176 720 Z"
  })), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dot: true,
    tone: "negative"
  }))));
}
function HomeScreen({
  saved,
  toggle,
  openJob,
  onSearch
}) {
  const [cat, setCat] = React.useState("추천");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    onSearch: onSearch
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "6px 20px 12px",
      overflowX: "auto",
      borderBottom: "1px solid var(--line-normal-normal)"
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    size: "small",
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-title3)",
      letterSpacing: "var(--tracking-title3)",
      color: "var(--label-normal)"
    }
  }, "\uD68C\uC6D0\uB2D8\uC744 \uC704\uD55C \uCD94\uCC9C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body2-reading)",
      color: "var(--label-alternative)",
      marginTop: 2
    }
  }, "\uAD00\uC2EC \uC9C1\uAD70\uACFC \uACBD\uB825\uC5D0 \uB9DE\uCD98 \uD3EC\uC9C0\uC158\uC774\uC5D0\uC694")), /*#__PURE__*/React.createElement("div", null, JOBS.map((j, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j.id
  }, /*#__PURE__*/React.createElement(JobRow, {
    job: j,
    saved: saved.has(j.id),
    onToggle: toggle,
    onOpen: () => openJob(j)
  }), i < JOBS.length - 1 && /*#__PURE__*/React.createElement(Divider, {
    inset: 20
  })))));
}
function SearchScreen({
  onBack,
  openJob,
  saved,
  toggle
}) {
  const [q, setQ] = React.useState("");
  const results = q ? JOBS.filter(j => (j.role + j.company + j.tags.join()).toLowerCase().includes(q.toLowerCase())) : JOBS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 16px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    size: "medium",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\uD3EC\uC9C0\uC158, \uD68C\uC0AC, \uC2A4\uD0AC \uAC80\uC0C9",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    autoFocus: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 20px 12px",
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, ["React", "PM", "신입", "디자이너"].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    size: "small",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "history",
      size: 14
    }),
    onClick: () => setQ(t)
  }, t))), /*#__PURE__*/React.createElement(Divider, null), results.map((j, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j.id
  }, /*#__PURE__*/React.createElement(JobRow, {
    job: j,
    saved: saved.has(j.id),
    onToggle: toggle,
    onOpen: () => openJob(j)
  }), i < results.length - 1 && /*#__PURE__*/React.createElement(Divider, {
    inset: 20
  }))));
}
function JobDetail({
  job,
  onBack,
  saved,
  toggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(Icon, {
    name: "share"
  })), /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(Icon, {
    name: "more-vertical"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement(CompanyMark, {
    color: job.logo,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-title2)",
      letterSpacing: "var(--tracking-title2)",
      color: "var(--label-normal)",
      marginTop: 14
    }
  }, job.role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body1-reading)",
      color: "var(--label-alternative)",
      marginTop: 4
    }
  }, job.company, " \xB7 ", job.loc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    size: "small",
    active: true
  }, job.exp), job.tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    size: "small"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--primary-normal)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "coins",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label1-normal)",
      color: "var(--label-normal)"
    }
  }, "\uD569\uACA9\uBCF4\uC0C1\uAE08 ", job.reward), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-label2)",
      color: "var(--label-alternative)"
    }
  }, "\uCD94\uCC9C \uC2DC \uCD5C\uB300 50%\uAE4C\uC9C0 \uC9C0\uAE09")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-headline1)",
      letterSpacing: "var(--tracking-headline1)",
      color: "var(--label-normal)",
      marginBottom: 8
    }
  }, "\uC8FC\uC694 \uC5C5\uBB34"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      font: "var(--font-body1-reading)",
      letterSpacing: "var(--tracking-body1)",
      color: "var(--label-neutral)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "\uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uC6F9 \uC11C\uBE44\uC2A4 \uC124\uACC4 \uBC0F \uAC1C\uBC1C"), /*#__PURE__*/React.createElement("li", null, "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \uAE30\uBC18 \uCEF4\uD3EC\uB10C\uD2B8 \uAD6C\uCD95"), /*#__PURE__*/React.createElement("li", null, "\uC131\uB2A5 \uCD5C\uC801\uD654 \uBC0F \uCF54\uB4DC \uD488\uC9C8 \uAC1C\uC120"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      display: "flex",
      gap: 10,
      padding: 16,
      background: "var(--background-normal-normal)",
      borderTop: "1px solid var(--line-normal-normal)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outlined",
    size: "large",
    onClick: () => toggle(job.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: saved.has(job.id) ? "bookmark-fill" : "bookmark"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true
  }, "\uC9C0\uC6D0\uD558\uAE30")));
}
function Placeholder({
  title,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 460,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      color: "var(--label-assistive)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body2-normal)"
    }
  }, title));
}
function App() {
  const [tab, setTab] = React.useState("recruit");
  const [view, setView] = React.useState({
    name: "home"
  });
  const [saved, setSaved] = React.useState(new Set([1]));
  const toggle = id => setSaved(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const openJob = job => setView({
    name: "detail",
    job
  });
  let screen;
  if (view.name === "detail") screen = /*#__PURE__*/React.createElement(JobDetail, {
    job: view.job,
    onBack: () => setView({
      name: "home"
    }),
    saved: saved,
    toggle: toggle
  });else if (view.name === "search") screen = /*#__PURE__*/React.createElement(SearchScreen, {
    onBack: () => setView({
      name: "home"
    }),
    openJob: openJob,
    saved: saved,
    toggle: toggle
  });else if (tab === "recruit") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    saved: saved,
    toggle: toggle,
    openJob: openJob,
    onSearch: () => setView({
      name: "search"
    })
  });else if (tab === "career") screen = /*#__PURE__*/React.createElement(Placeholder, {
    title: "\uCEE4\uB9AC\uC5B4 \uCF58\uD150\uCE20",
    icon: "graduation"
  });else if (tab === "social") screen = /*#__PURE__*/React.createElement(Placeholder, {
    title: "\uC18C\uC15C \uD53C\uB4DC",
    icon: "persons"
  });else screen = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\uAE40\uC6D0\uD2F0",
    size: "xlarge"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-title3)",
      letterSpacing: "var(--tracking-title3)",
      color: "var(--label-normal)"
    }
  }, "\uAE40\uC6D0\uD2F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-body2-reading)",
      color: "var(--label-alternative)"
    }
  }, "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \xB7 3\uB144\uCC28"))), /*#__PURE__*/React.createElement(Divider, {
    inset: 20
  }), [["bookmark", "저장한 공고", saved.size], ["document-text", "지원 현황", 3], ["coins", "합격보상금", "2,400만원"], ["setting", "설정", ""]].map(([ic, label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 20px",
      color: "var(--label-normal)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-body1-normal)",
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--font-label1-normal)",
      color: "var(--label-alternative)"
    }
  }, val), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  }))));
  const showNav = view.name !== "detail" && view.name !== "search";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--background-normal-normal)"
    }
  }, screen), showNav && /*#__PURE__*/React.createElement(BottomNavigation, {
    active: tab,
    onChange: setTab
  }));
}
window.WantedApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/screens.jsx", error: String((e && e.message) || e) }); }

if (__ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 === undefined) __ds_scope.__ds_default_components_icon_icon_data_dzztcy$pz0sl2 = __ds_scope.__ds_default_components_icon_icon_data_dzztcy;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FloatingActionButton = __ds_scope.FloatingActionButton;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextButton = __ds_scope.TextButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContentBadge = __ds_scope.ContentBadge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ListCell = __ds_scope.ListCell;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BottomNavigation = __ds_scope.BottomNavigation;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

})();
