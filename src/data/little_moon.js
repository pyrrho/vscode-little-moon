/**
 * Theme data
 */

const selenized = {
  dark: {
    //                        CIE L*a*b*
    //                        ----------
    bg__3:      "#001721", // 6  -12 -12
    bg__2:      "#002934", // 14 -12 -12
    bg__1:      "#00313d", // 18 -12 -12
    bg:         "#053d48", // 23 -12 -12 -- orig: .bg_0
    bg_1:       "#0e4956", // 28 -13 -13 -- orig: .bg_1
    bg_2:       "#275b69", // 36 -13 -13 -- orig: .bg_2

    fg:         "#adbcbc", // 75  -5  -2 -- orig: .fg_0
    fg_1:       "#c8d7d8", // 85  -5  -2 -- orig: .fg_1

    dim:        "#718b90", // 56  -8  -6 -- orig: .dim_0

    red:        "#fd564e", // 60  63  40
    red_1:      "#ff675d", // 66  63  40 -- orig: .br_red
    green:      "#80b83c", // 69 -38  55
    green_1:    "#8ec649", // 74 -38  55 -- orig: .br_green
    yellow:     "#e3b230", // 75   6  68
    yellow_1:   "#f2bf3f", // 80   6  68 -- orig: .br_yellow
    blue:       "#0096f5", // 60   0 -57
    blue_1:     "#21a6ff", // 66   0 -57 -- orig: .br_blue
    magenta:    "#f176bd", // 66  55 -15
    magenta_1:  "#ff87cd", // 72  55 -15 -- orig: .br_magenta
    cyan:       "#39c7b9", // 73 -40  -4
    cyan_1:     "#4bd5c7", // 78 -40  -4 -- orig: .br_cyan
    orange:     "#f38649", // 67  37  50
    orange_1:   "#ff9356", // 72  37  50 -- orig: .br_orange
    violet:     "#a58cec", // 64  30 -45
    violet_1:   "#b399fa", // 69  30 -45 -- orig: .br_violet

  },
  light: {
    //                        CIE L*a*b*
    //                        ----------
    bg__5:      "#5f5642", // 37   0  13
    bg__4:      "#928872", // 57   0  13
    bg__3:      "#c5baa4", // 76   0  13
    bg__2:      "#d6cbb4", // 82   0  13 -- orig: .bg_2
    bg__1:      "#f0e4cc", // 91   0  13 -- orig: .bg_1
    bg:         "#fef3da", // 96   0  13 -- orig: .bg_0
    bg_1:       "#fff8e0", // 98   0  13
    bg_2:       "#fffee6", // 100  0  13

    bg_red:     "#ff9181", // 82  66  42
    bg_green:   "#aae660", // 85 -40  58
    bg_yellow:  "#ffd048", // 86   6  71
    bg_blue:    "#60d2ff", // 82   0 -60
    bg_magenta: "#ffa5f1", // 84  58 -16
    bg_cyan:    "#5deddd", // 86 -42  -4
    bg_orange:  "#ffb271", // 84  39  52
    bg_violet:  "#ddbeff", // 83  32 -47

    fg__2:      "#384c52", // 31  -6  -6 -- orig: .fg_1
    fg__1:      "#465a60", // 37  -6  -6
    fg:         "#52666d", // 42  -6  -6 -- orig: .fg_0
    fg_1:       "#778c93", // 57  -6  -6
    fg_2:       "#9fb4bb", // 72  -6  -6

    dim:        "#8f9894", // 62  -4   1 -- orig: .dim_0

    red__2:     "#9b0002", // 28  66  42
    red__1:     "#ce1726", // 44  66  42 -- orig: .br_red
    red:        "#d4212b", // 46  66  42 -- orig: .red
    red_1:      "#f1413f", // 55  66  42
    green__2:   "#135800", // 32 -40  58
    green__1:   "#4e8b00", // 52 -40  58 -- orig: .br_green
    green:      "#539100", // 54 -40  58 -- orig: .green
    green_1:    "#69a61f", // 62 -40  58
    yellow__2:  "#6e4d00", // 35   6  71
    yellow__1:  "#ad8300", // 57   6  71 -- orig: .br_yellow
    yellow:     "#b38800", // 59   6  71 -- orig: .yellow
    yellow_1:   "#c89a00", // 66   6  71
    blue__2:    "#0049a0", // 28   0 -60
    blue__1:    "#006ecd", // 44   0 -60 -- orig: .br_blue
    blue:       "#0073d2", // 46   0 -60 -- orig: .blue
    blue_1:     "#008aec", // 55   0 -60
    magenta__2: "#8e0063", // 31  58 -16
    magenta__1: "#c54694", // 50  58 -16 -- orig: .br_magenta
    magenta:    "#cb4c99", // 52  58 -16 -- orig: .magenta
    magenta_1:  "#e362ae", // 60  58 -16
    cyan__2:    "#006055", // 34 -42  -4
    cyan__1:    "#009689", // 55 -42  -4 -- orig: .br_cyan
    cyan:       "#009c8f", // 57 -42  -4 -- orig: .cyan
    cyan_1:     "#00afa1", // 64 -42  -4
    orange__2:  "#882800", // 31  39  52
    orange__1:  "#c1581b", // 50  39  52 -- orig: .br_orange
    orange:     "#c75d20", // 52  39  52 -- orig: .orange
    orange_1:   "#e07234", // 60  39  52
    violet__2:  "#47358e", // 29  32 -47
    violet__1:  "#785fbf", // 47  32 -47 -- orig: .br_violet
    violet:     "#7d64c5", // 49  32 -47 -- orig: .violet
    violet_1:   "#967bde", // 58  32 -47

    // Notes:
    // - bg_{color} -- colors shifted closer to the luminance of bg.
    //   Calculated via `L + ((100 - L) * .666)` where `L` is the lightness of
    //   the target color, and `.666` is the approximate `ΔL` shift from `red`
    //   to `bg__2` (`(100 - 46)/82`).
    // - The original `.br_{color}` luminance shifts (NB. those are _darker_
    //   than base) are comically small. A new set of dark variants was
    //   calculated via `L - (L * .41)` where `L` is the lightness of the target
    //   color, and `.41` is the approximate `ΔL` shift to make `green` and
    //   `green__2` visually distinct.
    //   FIXME: Revisit this; the current shift is too much.
    // - Because the original `br_{color}` set is actually a dark variant, a new
    //   set of light variants was calculated via `L+((100 - L) * 0.165)` where
    //   `L` is the lightness of the target color, and `.165` is the approximate
    //   `ΔL` shift from `dark.bg_0` to `dark.bg_2` (`(36-23)/(100-23)`).
  }
};

// see the  "`range` object documentation" below
const range = {
  light: {
    colorful: {
      sel: alpha(selenized.light.cyan, "30"),
      sel_dim: null,

      find: alpha(selenized.light.magenta, "18"),
      find_dim: alpha(selenized.light.magenta, "30"),

      hover: alpha(selenized.light.green, "30"),

      find_in: alpha(selenized.light.yellow, "10"),
      result: alpha(selenized.light.blue_1, "20"),

      semantic_symbol_ro: alpha(selenized.light.green, "30"),
      semantic_symbol_rw: alpha(selenized.light.orange, "30"),
      semantic_symbol_bak: alpha(selenized.light.blue, "30"),
    },
    subtle: {
      sel: alpha(selenized.light.cyan, "30"),
      sel_dim: null,

      find: alpha(selenized.light.magenta, "18"),
      find_dim: alpha(selenized.light.magenta, "30"),
      find_in: alpha(selenized.light.yellow, "10"),

      hover: alpha(selenized.light.green, "30"),

      result: alpha(selenized.light.blue_1, "20"),

      semantic_symbol_ro: alpha(selenized.light.green, "30"),
      semantic_symbol_rw: alpha(selenized.light.orange, "30"),
      semantic_symbol_bak: alpha(selenized.light.blue, "30"),
    },
  },
};
const terminal = {
  light: {
    original: {
      _00_black:          selenized.light.bg__1,
      _01_red:            selenized.light.red,
      _02_green:          selenized.light.green,
      _03_yellow:         selenized.light.yellow,
      _04_blue:           selenized.light.blue,
      _05_magenta:        selenized.light.magenta,
      _06_cyan:           selenized.light.cyan,
      _07_white:          selenized.light.dim,
      _08_bright_black:   selenized.light.bg__2,
      _09_bright_red:     selenized.light.red__1,
      _10_bright_green:   selenized.light.green__1,
      _11_bright_yellow:  selenized.light.yellow__1,
      _12_bright_blue:    selenized.light.blue__1,
      _13_bright_magenta: selenized.light.magenta__1,
      _14_bright_cyan:    selenized.light.cyan__1,
      _15_bright_white:   selenized.light.fg__2,
    },
    bright: {
      _00_black:          selenized.light.bg__1,
      _01_red:            selenized.light.red,
      _02_green:          selenized.light.green,
      _03_yellow:         selenized.light.yellow,
      _04_blue:           selenized.light.blue,
      _05_magenta:        selenized.light.magenta,
      _06_cyan:           selenized.light.cyan,
      _07_white:          selenized.light.dim,
      _08_bright_black:   selenized.light.bg__2,
      _09_bright_red:     selenized.light.red_1,
      _10_bright_green:   selenized.light.green_1,
      _11_bright_yellow:  selenized.light.yellow_1,
      _12_bright_blue:    selenized.light.blue_1,
      _13_bright_magenta: selenized.light.magenta_1,
      _14_bright_cyan:    selenized.light.cyan_1,
      _15_bright_white:   selenized.light.fg__2,
    },
  },
};

const little_moon = {
  type: {
    dark: "dark",
    light: "light",
  },
  semanticHighlighting: true,
  light: {
    bg: {
      _0: selenized.light.bg,
      _2: selenized.light.bg__1,
      _3: selenized.light.bg__2,
      _4: selenized.light.bg__3,
      br: selenized.light.bg_1,

      ovr: alpha(selenized.light.bg, "a0"),
      ovr2: alpha(selenized.light.bg__2, "a0"),

      dbg: selenized.light.orange_1,
      no_folder: selenized.light.violet,
    },
    fg: {
      _0: selenized.light.fg,
      _2: selenized.light.dim,
      em: selenized.light.fg__1,
      em2: selenized.light.fg__2,
      hl: selenized.light.yellow,
      hl2: selenized.light.yellow__2,
      i: {
        em: selenized.light.bg__1,
        _0: selenized.light.bg,
        br: selenized.light.bg_1,
      },
    },
    border: {
      em2: selenized.light.bg__4,
      em: selenized.light.bg__3,
      _0: selenized.light.bg__2,
      _2: selenized.light.bg__1,
      br: selenized.light.bg_1,
    },
    hover: {
      _0: selenized.light.bg__2,
      _2: selenized.light.bg__1,
      _3: selenized.light.bg,
      dim: alpha(selenized.light.bg, "c0"),
      ovr: alpha(selenized.light.bg__1, "d8"),
    },
    scroll: {
      _0: alpha(selenized.light.bg__3, "50"),
      _2: alpha(selenized.light.bg__3, "60"),
      hv: alpha(selenized.light.bg__3, "70"),
      em: alpha(selenized.light.bg__3, "90"),
    },
    rule: {
      em: selenized.light.bg__3,
      dim: alpha(selenized.light.bg__2, "80"),
    },
    badge: {
      bg: selenized.light.yellow,
      bg_hv: selenized.light.yellow_1,
    },
    button: {
      bg: selenized.light.blue,
      bg_hv: selenized.light.blue_1,
    },
    shadow: {
      _0: alpha(selenized.light.bg__2, "c0"),
      _2: alpha(selenized.light.bg__3, "c0"),
      dim: alpha(selenized.light.bg__1, "c0"),
    },
    git: {
      added: selenized.light.green,
      modified: selenized.light.blue,
      deleted: selenized.light.orange,
      renamed: selenized.light.yellow,

      untracked: selenized.light.fg,
      ignored: selenized.light.dim,
      staged: selenized.light.violet,
      conflicting: selenized.light.red,

      submodule: selenized.light.magenta,
    },
    level: {
      err: selenized.light.red,
      err_bg: selenized.light.bg_red,
      warn: selenized.light.yellow,
      warn_bg: selenized.light.bg_yellow,
      info: selenized.light.violet,
      info_bg: selenized.light.bg_violet,
      hint: selenized.light.cyan,
      hint_bg: selenized.light.bg_cyan,
    },
    range: range.light.colorful,
    terminal: terminal.light.bright,

    red__1:     selenized.light.red__2,
    red:        selenized.light.red,
    red_1:      selenized.light.red_1,
    green__1:   selenized.light.green__2,
    green:      selenized.light.green,
    green_1:    selenized.light.green_1,
    yellow__1:  selenized.light.yellow__1,
    yellow:     selenized.light.yellow,
    yellow_1:   selenized.light.yellow_1,
    blue__1:    selenized.light.blue__2,
    blue:       selenized.light.blue,
    blue_1:     selenized.light.blue_1,
    magenta__1: selenized.light.magenta__2,
    magenta:    selenized.light.magenta,
    magenta_1:  selenized.light.magenta_1,
    cyan__1:    selenized.light.cyan__2,
    cyan:       selenized.light.cyan,
    cyan_1:     selenized.light.cyan_1,
    orange__1:  selenized.light.orange__2,
    orange:     selenized.light.orange,
    orange_1:   selenized.light.orange_1,
    violet__1:  selenized.light.violet__2,
    violet:     selenized.light.violet,
    violet_1:   selenized.light.violet_1,
  },

  tint: {
    _12: "#ffffff1f",
    _20: "#ffffff33",
    _37: "#ffffff5f",
    _50: "#ffffff80",
  },
  pure: {
    transparent: "#ffffff00",
    white: "#ffffff",
    red: "#f00",
    green: "#0f0",
    blue: "#00f",
  },
};

function alpha(color, alpha) {
  return `${color}${alpha}`;
}

module.exports = little_moon;

/** `range` object documentation
 * why am I not doing this in TS?
{
  sel:
    editor.selectionBackground
    What your cursor do
    default: locked

  sel_inact:
    editor.inactiveSelectionBackground
    What your cursor did in an editor that's no longer focused
    default: transparent 0.5 `editor.selectionBackground`

  sel_dim:
    editor.selectionHighlightBackground
    Same content as the cursor selection
    default: "less prominent" `editor.selectionBackground`

  find:
    editor.findMatchBackground
    Current search match
    default: locked

  find_dim:
    editor.findMatchHighlightBackground
    Other search matches
    default: locked

  find_dim_se:
    searchEditor.findMatchBackground
    Like editor.findMatchHighlightBackground but in the Search Editor.
    default: transparent 0.66 `editor.findMatchHighlightBackground`

  symbol:
    editor.symbolHighlightBackground
    Symbol targeted by e.g. go-to-definition
    default: `editor.findMatchHighlightBackground`

  find_in:
    editor.findRangeHighlightBackground
    Visual range for 'Find in selection'
    default: locked

  result:
    editor.rangeHighlightBackground
    Range for find results; ctrl+f, breadcrumb navigation, etc.
    default: locked

  hover:
    editor.hoverHighlightBackground
    Mouse-hover popover symbol highlight
    default: locked

  semantic_symbol_ro:
    editor.wordHighlightBackground
    Semantic symbol under mouse: r/o usage
    default: locked
  semantic_symbol_rw:
    editor.wordHighlightStrongBackground
    Semantic symbol under mouse: r/w usage
    default: locked
  semantic_symbol_bak:
    editor.wordHighlightTextBackground
    Semantic symbol under mouse: fallback
    default: editor.wordHighlightBackground
} */