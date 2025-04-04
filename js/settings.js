
// FIXME
var vars = {
  'classNum': 'CS3520',
  'className': 'Programming in C++',
  'semester': 'Summer 2025',
  'section': '2',
};

// FIXME
// if you want additional
// pages, simply push
// an array that has
// the file name as the
// first element and title
// as the second
// (examples provided)
var tabs = [];
tabs.push(["description.html", "Course Description"]);
tabs.push(["policies.html", "Policies"]);


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function settingsReady() {
  // set the page title (change as desired)
  $(document).attr("title", vars['classNum'] + " | " + vars['className'] + " | " + vars['section'] + " | " + vars['semester']);

  // sets the navbar title (shortening for smaller screens)
  $('#brand-big').text(vars['classNum'] + " | " + vars['className']);
  $('#brand-small').text(_shorten(vars['classNum'] + " | " + vars['className']));

  // generally replaces any usage of variable classes on the page
  for (k in vars) {
    $('.var-' + k).text(vars[k]);
  };

  // determine file name
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);

  // produce navbar dynamically from settings
  if (tabs.length > 0) {
    tabs.unshift(["index.html", "Home"]);

    active = "index.html";
    tabs.forEach(function(item) {
      if (item[0] == filename) {
        active = item[0];
      }
    });

    var navbarList = $('#myNavbar ul:first');
    tabs.forEach(function(item) {
      navbarList.append($('<li>', {
        class: ((item[0] == active)?("active"):("")),
        html: $('<a>', {
          href: item[0],
          text: item[1]
        })
      }));
    });
  } else {
    $('#burger').hide();
  }
}

function _shorten(s) {
  var maxlen = 24;
  var fill = "...";

  if (s.length > maxlen) {
    return s.substr(0, maxlen-fill.length) + fill;
  } else {
    return s;
  }
}

function dateMod() {
  return document.lastModified;
}
