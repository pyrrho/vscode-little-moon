/**
 * Theme data
 */

const palette = {
  light: {
    //                        CIE L*a*b*
    //                        ----------
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

    red:        "#d4212b", // 46  66  42 -- orig: .red
    green:      "#539100", // 54 -40  58 -- orig: .green
    yellow:     "#b38800", // 59   6  71 -- orig: .yellow
    blue:       "#0073d2", // 46   0 -60 -- orig: .blue
    magenta:    "#cb4c99", // 52  58 -16 -- orig: .magenta
    cyan:       "#009c8f", // 57 -42  -4 -- orig: .cyan
    orange:     "#c75d20", // 52  39  52 -- orig: .orange
    violet:     "#7d64c5", // 49  32 -47 -- orig: .violet

    red_1:      "#f1413f", // 55  66  42
    green_1:    "#69a61f", // 62 -40  58
    yellow_1:   "#c89a00", // 66   6  71
    blue_1:     "#008aec", // 55   0 -60
    magenta_1:  "#e362ae", // 60  58 -16
    cyan_1:     "#00afa1", // 64 -42  -4
    orange_1:   "#e07234", // 60  39  52
    violet_1:   "#967bde", // 58  32 -47

    red__1:     "#c40120", // 41  66  42
    green__1:   "#438100", // 48 -40  58
    yellow__1:  "#9e7600", // 52   6  71
    blue__1:    "#0067c4", // 41   0 -60
    magenta__1: "#b93b89", // 46  58 -16
    cyan__1:    "#00897d", // 50 -42  -4
    orange__1:  "#b54e0f", // 46  39  52
    violet__1:  "#6d56b4", // 43  32 -47
  },
  dark: {
    //                        CIE L*a*b*
    //                        ----------
    bg__4:      "#001923", // 6  -12 -12
    bg__3:      "#00202b", // 10 -12 -12
    bg__2:      "#002b36", // 15 -12 -12
    bg__1:      "#003641", // 20 -12 -12
    bg:         "#053d48", // 23 -12 -12 -- orig: .bg_0
    bg_1:       "#0e4956", // 28 -13 -13 -- orig: .bg_1
    bg_2:       "#275b69", // 36 -13 -13 -- orig: .bg_2
    bg_3:       "#376a78", // 43 -13 -13
    bg_4:       "#467987", // 51 -13 -13

    bg_red:     "#910000", // 26  63  40
    bg_green:   "#135300", // 30 -38  55
    bg_yellow:  "#694800", // 33   6  68
    bg_blue:    "#004496", // 26   0 -57
    bg_magenta: "#86015d", // 29  55 -15
    bg_cyan:    "#005a51", // 32 -40  -4
    bg_orange:  "#7f2500", // 29  37  50
    bg_violet:  "#443488", // 28  30 -45

    fg__2:      "#606d6e", // 45  -6  -6
    fg__1:      "#859394", // 60  -6  -6
    fg:         "#adbcbc", // 75  -5  -2 -- orig: .fg_0
    fg_1:       "#b8c7c7", // 79  -5  -2
    fg_2:       "#c8d7d8", // 85  -5  -2 -- orig: .fg_1

    dim:        "#718b90", // 56  -8  -6 -- orig: .dim_0

    red:        "#fd564e", // 60  63  40 -- orig: .red
    green:      "#80b83c", // 69 -38  55 -- orig: .green
    yellow:     "#e3b230", // 75   6  68 -- orig: .yellow
    blue:       "#0096f5", // 60   0 -57 -- orig: .blue
    magenta:    "#f176bd", // 66  55 -15 -- orig: .magenta
    cyan:       "#39c7b9", // 73 -40  -4 -- orig: .cyan
    orange:     "#f38649", // 67  37  50 -- orig: .orange
    violet:     "#a58cec", // 64  30 -45 -- orig: .violet

    red_1:      "#ff675d", // 66  63  40 -- orig: .br_red
    green_1:    "#8ec649", // 74 -38  55 -- orig: .br_green
    yellow_1:   "#f2bf3f", // 80   6  68 -- orig: .br_yellow
    blue_1:     "#21a6ff", // 66   0 -57 -- orig: .br_blue
    magenta_1:  "#ff87cd", // 72  55 -15 -- orig: .br_magenta
    cyan_1:     "#4bd5c7", // 78 -40  -4 -- orig: .br_cyan
    orange_1:   "#ff9356", // 72  37  50 -- orig: .br_orange
    violet_1:   "#b399fa", // 69  30 -45 -- orig: .br_violet

    red__1:     "#da3435", // 49  63  40
    green__1:   "#5f9818", // 57 -38  55
    yellow__1:  "#bc8f00", // 62   6  68
    blue__1:    "#007ad5", // 49   0 -57
    magenta__1: "#cd559c", // 54  55 -15
    cyan__1:    "#00a396", // 60 -40  -4
    orange__1:  "#ce672c", // 55  37  50
    violet__1:  "#8770cc", // 53  30 -45
  }
};

const little_moon = {
  type: {
    dark: "dark",
    light: "light",
  },
  semanticHighlighting: true,
  light: {
    fg: {
      _0: palette.light.fg,
      _2: palette.light.dim,
      em: palette.light.fg__1,
      em2: palette.light.fg__2,
      hl: palette.light.yellow,
      hl2: palette.light.yellow__1,
      i: {
        em: palette.light.bg__1,
        _0: palette.light.bg,
        br: palette.light.bg_1,
      },
    },
    bg: {
      _0: palette.light.bg,
      _2: palette.light.bg__1,
      _3: palette.light.bg__2,
      _4: palette.light.bg__3,
      br: palette.light.bg_1,

      ovr: alpha(palette.light.bg, "a0"),
      ovr2: alpha(palette.light.bg__1, "a0"),

      dbg: palette.light.orange_1,
      no_folder: palette.light.violet,
    },
    border: {
      em2: palette.light.bg__4,
      em: palette.light.bg__3,
      _0: palette.light.bg__2,
      _2: palette.light.bg__1,
      br: palette.light.bg_1,
      br2: palette.light.bg,
    },
    hl: {
      _0: {
        focus: palette.light.bg__2,
        // TODO: Cheating w/ alpha to get another bg variant
        hover: alpha(palette.light.bg__2, "a0"),
        selected: palette.light.bg,
        // TODO: Cheating w/ alpha to get another bg variant
        selected_dim: alpha(palette.light.bg, "a0"),
        ovr: alpha(palette.light.bg__1, "d0"),
      },
      _2: {
        hover: palette.light.bg__1,
        active: palette.light.bg,
      }
    },
    range: {
      sel: alpha(palette.light.blue, "3c"),
      sel_dim: alpha(palette.light.blue, "2c"),
      sel_dim2: alpha(palette.light.blue, "1c"),
      sel_em: alpha(palette.light.blue, "60"),

      hover: alpha(palette.light.blue, "0e"),
      hover_em: alpha(palette.light.blue_1, "80"),

      find_8: alpha(palette.light.yellow, "80"),
      find_4: alpha(palette.light.yellow, "40"),
      find_3: alpha(palette.light.yellow, "30"),
      find_2: alpha(palette.light.yellow, "20"),
      find_1: alpha(palette.light.yellow, "10"),

      symbol: alpha(palette.light.cyan, "30"),

      semantic_symbol_ro_dim: alpha(palette.light.green, "30"),
      semantic_symbol_ro_em: alpha(palette.light.green, "c0"),

      semantic_symbol_rw_dim: alpha(palette.light.magenta, "30"),
      semantic_symbol_rw_em: alpha(palette.light.magenta, "c0"),

      semantic_symbol_dim: alpha(palette.light.cyan, "30"),
      semantic_symbol_em: alpha(palette.light.cyan, "c0"),
    },
    drag_and_drop: {
      bg: alpha(palette.light.bg__3, "80"),
      em: alpha(palette.light.fg__2, "a0"),
      i: alpha(palette.light.bg_1, "a0"),
    },
    scroll: {
      _0: alpha(palette.light.bg__3, "50"),
      _2: alpha(palette.light.bg__3, "60"),
      hv: alpha(palette.light.bg__3, "70"),
      em: alpha(palette.light.bg__3, "90"),
    },
    rule: {
      em: palette.light.bg__3,
      dim: alpha(palette.light.bg__2, "80"),
    },
    badge: {
      bg: palette.light.yellow,
      bg_hv: palette.light.yellow_1,
    },
    button: {
      bg: palette.light.blue,
      bg_hv: palette.light.blue_1,
    },
    shadow: {
      _0: alpha(palette.light.bg__2, "a0"),
      _2: alpha(palette.light.bg__3, "c0"),
      dim: alpha(palette.light.bg__1, "c0"),
    },
    git: {
      added: palette.light.green,
      added_bg: palette.light.bg_green,
      added_em: palette.light.green__1,

      modified: palette.light.blue,
      modified_bg: palette.light.bg_blue,
      modified_em: palette.light.blue__1,

      deleted: palette.light.red,
      deleted_bg: palette.light.bg_red,
      deleted_em: palette.light.red__1,

      renamed: palette.light.yellow,
      renamed_bg: palette.light.bg_yellow,

      unmodified: palette.light.violet,
      unmodified_bg: palette.light.bg_violet,

      untracked: palette.light.fg,
      ignored: palette.light.dim,
      staged: palette.light.violet,
      conflicting: palette.light.orange,

      submodule: palette.light.magenta,
    },
    level: {
      err: palette.light.red,
      err_br: palette.light.red_1,
      err_bg: palette.light.bg_red,
      warn: palette.light.yellow,
      warn_br: palette.light.yellow_1,
      warn_bg: palette.light.bg_yellow,
      info: palette.light.blue,
      info_br: palette.light.blue_1,
      info_bg: palette.light.bg_blue,
      hint: palette.light.cyan,
      hint_br: palette.light.cyan_1,
      hint_bg: palette.light.bg_cyan,
    },
    merge: {
      current: palette.light.cyan_1,
      incoming: palette.light.blue_1,
    },
    terminal: {
      _00_black:          palette.light.bg__1,
      _01_red:            palette.light.red,
      _02_green:          palette.light.green,
      _03_yellow:         palette.light.yellow,
      _04_blue:           palette.light.blue,
      _05_magenta:        palette.light.magenta,
      _06_cyan:           palette.light.cyan,
      _07_white:          palette.light.dim,
      _08_bright_black:   palette.light.bg__2,
      _09_bright_red:     palette.light.red_1,     // NB. Orig theme shifts dark; __1, not _1
      _10_bright_green:   palette.light.green_1,   // NB. Orig theme shifts dark; __1, not _1
      _11_bright_yellow:  palette.light.yellow_1,  // NB. Orig theme shifts dark; __1, not _1
      _12_bright_blue:    palette.light.blue_1,    // NB. Orig theme shifts dark; __1, not _1
      _13_bright_magenta: palette.light.magenta_1, // NB. Orig theme shifts dark; __1, not _1
      _14_bright_cyan:    palette.light.cyan_1,    // NB. Orig theme shifts dark; __1, not _1
      _15_bright_white:   palette.light.fg__2,
    },
    palette: palette.light,
  },

  dark: {
    fg: {
      _0: palette.dark.fg,
      _2: palette.dark.dim,
      em: palette.dark.fg_1,
      em2: palette.dark.fg_2,
      hl: palette.dark.yellow,
      hl2: palette.dark.yellow_1,
      i: {
        em: palette.dark.bg_1,
        _0: palette.dark.bg,
        br: palette.dark.bg__1,
      },
    },
    bg: {
      _0: palette.dark.bg,
      _2: palette.dark.bg__1,
      _3: palette.dark.bg__2,
      _4: palette.dark.bg__3,
      br: palette.dark.bg_1,

      ovr: alpha(palette.dark.bg, "a0"),
      ovr2: alpha(palette.dark.bg__1, "a0"),

      dbg: palette.dark.orange_1,
      no_folder: palette.dark.violet,
    },
    border: {
      em2: palette.dark.bg_4,
      em: palette.dark.bg_3,
      _0: palette.dark.bg_2,
      _2: palette.dark.bg_1,
      br: palette.dark.bg__2,
      br2: palette.dark.bg__1,
    },
    range: {
      sel: alpha(palette.dark.blue, "3c"),
      sel_dim: alpha(palette.dark.blue, "2c"),
      sel_dim2: alpha(palette.dark.blue, "1c"),
      sel_em: alpha(palette.dark.blue, "60"),

      hover: alpha(palette.dark.blue, "0e"),
      hover_em: alpha(palette.dark.blue_1, "80"),

      find_8: alpha(palette.dark.yellow, "80"),
      find_4: alpha(palette.dark.yellow, "40"),
      find_3: alpha(palette.dark.yellow, "30"),
      find_2: alpha(palette.dark.yellow, "20"),
      find_1: alpha(palette.dark.yellow, "10"),

      symbol: alpha(palette.dark.cyan, "30"),

      semantic_symbol_ro_dim: alpha(palette.dark.green, "30"),
      semantic_symbol_ro_em: alpha(palette.dark.green, "c0"),

      semantic_symbol_rw_dim: alpha(palette.dark.magenta, "30"),
      semantic_symbol_rw_em: alpha(palette.dark.magenta, "c0"),

      semantic_symbol_dim: alpha(palette.dark.cyan, "30"),
      semantic_symbol_em: alpha(palette.dark.cyan, "c0"),
    },
    hl: {
      _0: {
        focus: palette.dark.bg__2,
        // TODO: Cheating w/ alpha to get another bg variant
        hover: alpha(palette.dark.bg__2, "a0"),
        selected: palette.dark.bg,
        // TODO: Cheating w/ alpha to get another bg variant
        selected_dim: alpha(palette.dark.bg, "a0"),
        ovr: alpha(palette.dark.bg__1, "d0"),
      },
      _2: {
        hover: palette.dark.bg__1,
        active: palette.dark.bg,
      }
    },
    drag_and_drop: {
      bg: alpha(palette.dark.bg__3, "80"),
      em: alpha(palette.dark.fg__2, "a0"),
      i: alpha(palette.dark.bg_1, "a0"),
    },
    scroll: {
      _0: alpha(palette.dark.bg__3, "50"),
      _2: alpha(palette.dark.bg__3, "60"),
      hv: alpha(palette.dark.bg__3, "70"),
      em: alpha(palette.dark.bg__3, "90"),
    },
    rule: {
      em: palette.dark.bg__3,
      dim: alpha(palette.dark.bg__2, "80"),
    },
    badge: {
      bg: palette.dark.yellow__1,
      bg_hv: palette.dark.yellow,
    },
    button: {
      bg: palette.dark.blue,
      bg_hv: palette.dark.blue_1,
    },
    shadow: {
      _0: alpha(palette.dark.bg__2, "a0"),
      _2: alpha(palette.dark.bg__3, "c0"),
      dim: alpha(palette.dark.bg__1, "c0"),
    },
    git: {
      added: palette.dark.green,
      added_bg: palette.dark.bg_green,
      added_em: palette.dark.green__1,

      modified: palette.dark.blue,
      modified_bg: palette.dark.bg_blue,
      modified_em: palette.dark.blue__1,

      deleted: palette.dark.red,
      deleted_bg: palette.dark.bg_red,
      deleted_em: palette.dark.red__1,

      renamed: palette.dark.yellow,
      renamed_bg: palette.dark.bg_yellow,

      unmodified: palette.dark.violet,
      unmodified_bg: palette.dark.bg_violet,

      untracked: palette.dark.fg,
      ignored: palette.dark.dim,
      staged: palette.dark.violet,
      conflicting: palette.dark.orange,

      submodule: palette.dark.magenta,
    },
    level: {
      err: palette.dark.red,
      err_br: palette.dark.red_1,
      err_bg: palette.dark.bg_red,
      warn: palette.dark.yellow,
      warn_br: palette.dark.yellow_1,
      warn_bg: palette.dark.bg_yellow,
      info: palette.dark.blue,
      info_br: palette.dark.blue_1,
      info_bg: palette.dark.bg_blue,
      hint: palette.dark.cyan,
      hint_br: palette.dark.cyan_1,
      hint_bg: palette.dark.bg_cyan,
    },
    merge: {
      current: palette.dark.cyan_1,
      incoming: palette.dark.blue_1,
    },
    terminal: {
      _00_black:          palette.dark.bg__1,
      _01_red:            palette.dark.red,
      _02_green:          palette.dark.green,
      _03_yellow:         palette.dark.yellow,
      _04_blue:           palette.dark.blue,
      _05_magenta:        palette.dark.magenta,
      _06_cyan:           palette.dark.cyan,
      _07_white:          palette.dark.dim,
      _08_bright_black:   palette.dark.bg__2,
      _09_bright_red:     palette.dark.red__1,
      _10_bright_green:   palette.dark.green__1,
      _11_bright_yellow:  palette.dark.yellow__1,
      _12_bright_blue:    palette.dark.blue__1,
      _13_bright_magenta: palette.dark.magenta__1,
      _14_bright_cyan:    palette.dark.cyan__1,
      _15_bright_white:   palette.dark.fg__2,
    },
    palette: palette.dark,
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
