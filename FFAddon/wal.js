var hilight = "";
var dimHighlight = "";
var backGround = "";
var foreGround = "";
var unhover = "";
var hover = "";
var toolbar = "";
var prevWallpaper = "";
function setTheme() {
    fetch('http://127.0.0.1:3000')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
          if (prevWallpaper === myJson.wallpaper){
              hilight = myJson.colors.color3
              dimHighlight = myJson.colors.color6
              backGround = myJson.special.background
              foreGround = myJson.special.foreground
              unhover = myJson.colors.color4
              hover = myJson.colors.color5
              toolbar = myJson.colors.color2

              themes = {
                'day': {
                    colors: {
                      "frame": backGround,
                      "tab_background_text": foreGround,
                      "toolbar": toolbar,
                      "bookmark_text": foreGround,
                      "toolbar_field": hover,
                      "toolbar_field_border": dimHighlight,
                      "toolbar_field_text": foreGround,
                      "toolbar_top_separator": hilight,
                      "toolbar_bottom_separator": dimHighlight,
                      "toolbar_vertical_separator": dimHighlight,
                      "button_background_hover": unhover,
                      "button_background_active": hover,
                      "popup":toolbar,
                      "popup_border":backGround,
                      "popup_highlight":hilight,
                      "sidebar":unhover,
                      "sidebar_border":dimHighlight,
                      "sidebar_highlight":hilight,
                      "tab_background_separator":hilight,
                      "tab_line":hilight,
                      "tab_loading":hilight,
                      "toolbar_bottom_separator":hilight,
                      "toolbar_field_border_focus":hilight,
                      "toolbar_field_focus":unhover
                  },
                  "images": {
                      "theme_frame": ""
                  }
                },
              };

          browser.theme.update(themes['day'])
          prevWallpaper = myJson.wallpaper
      }
      prevWallpaper = myJson.wallpaper
    });
}



// On start up, check the time to see what theme to show.
setTheme();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(setTheme);
browser.alarms.create('checkTime', {periodInMinutes: (1/12)});
