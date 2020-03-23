const include = filename => document.writeln(`<script type='text/javascript' src='js/${filename}.js'></script>`);

include("light");
include("clipboard");
include("mobile")

