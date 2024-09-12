To get the list of rules that are using hard-coded default values unrelated to the theme, you can;

1. Make sure your settings.json doesn't include any `workbench.colorCustomizations` overrides.
1. Open the command palette and run the `Developer: Generate Color Theme From Current Settings`
1. Save that file to disk as `generated_theme.jsonc`
1. Grep away the gunk
   ```sh
   cat generated_theme.jsonc |\
     ## pull some tricks to only look at color values
     rg '^\t\t\S.*"' |\
     ## Remove actively set colors
     rg -v '^\s+".*": *"#' |\
     ## Remove null-defaulted rules
     rg -v ': null' |\
     ## Trim leading whitespace
     tr -d '[:blank:]' |\
     ## Trim leading slashes
     tr -d '/' |\
     ## Replace `.`s with `_`s
     sed 's/\./_/' |\
     ## Make all the rules CSS to make looking at colors easier
     perl -p -e 's/"(.*)":"(.*)",/\.\1 { color: \2; }/' |\
     ## Strip on-theme colors
     ## NB. These are pulled from the theme's palette, and will need to be
     ##     updated as the palette is updated.
     rg -v '#5f5642[0-9a-zA-Z]{0,2}' |\
     rg -v '#928872[0-9a-zA-Z]{0,2}' |\
     rg -v '#c5baa4[0-9a-zA-Z]{0,2}' |\
     rg -v '#d6cbb4[0-9a-zA-Z]{0,2}' |\
     rg -v '#f0e4cc[0-9a-zA-Z]{0,2}' |\
     rg -v '#fef3da[0-9a-zA-Z]{0,2}' |\
     rg -v '#fff8e0[0-9a-zA-Z]{0,2}' |\
     rg -v '#fffee6[0-9a-zA-Z]{0,2}' |\
     rg -v '#ff9181[0-9a-zA-Z]{0,2}' |\
     rg -v '#aae660[0-9a-zA-Z]{0,2}' |\
     rg -v '#ffd048[0-9a-zA-Z]{0,2}' |\
     rg -v '#60d2ff[0-9a-zA-Z]{0,2}' |\
     rg -v '#ffa5f1[0-9a-zA-Z]{0,2}' |\
     rg -v '#5deddd[0-9a-zA-Z]{0,2}' |\
     rg -v '#ffb271[0-9a-zA-Z]{0,2}' |\
     rg -v '#ddbeff[0-9a-zA-Z]{0,2}' |\
     rg -v '#384c52[0-9a-zA-Z]{0,2}' |\
     rg -v '#465a60[0-9a-zA-Z]{0,2}' |\
     rg -v '#52666d[0-9a-zA-Z]{0,2}' |\
     rg -v '#778c93[0-9a-zA-Z]{0,2}' |\
     rg -v '#9fb4bb[0-9a-zA-Z]{0,2}' |\
     rg -v '#8f9894[0-9a-zA-Z]{0,2}' |\
     rg -v '#9b0002[0-9a-zA-Z]{0,2}' |\
     rg -v '#ce1726[0-9a-zA-Z]{0,2}' |\
     rg -v '#d4212b[0-9a-zA-Z]{0,2}' |\
     rg -v '#f1413f[0-9a-zA-Z]{0,2}' |\
     rg -v '#135800[0-9a-zA-Z]{0,2}' |\
     rg -v '#4e8b00[0-9a-zA-Z]{0,2}' |\
     rg -v '#539100[0-9a-zA-Z]{0,2}' |\
     rg -v '#69a61f[0-9a-zA-Z]{0,2}' |\
     rg -v '#6e4d00[0-9a-zA-Z]{0,2}' |\
     rg -v '#ad8300[0-9a-zA-Z]{0,2}' |\
     rg -v '#b38800[0-9a-zA-Z]{0,2}' |\
     rg -v '#c89a00[0-9a-zA-Z]{0,2}' |\
     rg -v '#0049a0[0-9a-zA-Z]{0,2}' |\
     rg -v '#006ecd[0-9a-zA-Z]{0,2}' |\
     rg -v '#0073d2[0-9a-zA-Z]{0,2}' |\
     rg -v '#008aec[0-9a-zA-Z]{0,2}' |\
     rg -v '#8e0063[0-9a-zA-Z]{0,2}' |\
     rg -v '#c54694[0-9a-zA-Z]{0,2}' |\
     rg -v '#cb4c99[0-9a-zA-Z]{0,2}' |\
     rg -v '#e362ae[0-9a-zA-Z]{0,2}' |\
     rg -v '#006055[0-9a-zA-Z]{0,2}' |\
     rg -v '#009689[0-9a-zA-Z]{0,2}' |\
     rg -v '#009c8f[0-9a-zA-Z]{0,2}' |\
     rg -v '#00afa1[0-9a-zA-Z]{0,2}' |\
     rg -v '#882800[0-9a-zA-Z]{0,2}' |\
     rg -v '#c1581b[0-9a-zA-Z]{0,2}' |\
     rg -v '#c75d20[0-9a-zA-Z]{0,2}' |\
     rg -v '#e07234[0-9a-zA-Z]{0,2}' |\
     rg -v '#47358e[0-9a-zA-Z]{0,2}' |\
     rg -v '#785fbf[0-9a-zA-Z]{0,2}' |\
     rg -v '#7d64c5[0-9a-zA-Z]{0,2}' |\
     rg -v '#967bde[0-9a-zA-Z]{0,2}' |\
     ## Columns!
     column -t \
     > off_theme_colors.css
   ```