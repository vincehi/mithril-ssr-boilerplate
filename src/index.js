import m from "mithril";

var count = 0;

var Nav = {
    view: function() {
        return (
            <nav>
                <a href="/" oncreate={m.route.link}>Home</a>
                <a href="/contact" oncreate={m.route.link}>Contact</a>
            </nav>
    )
    }
};

m.render(document.getElementById("mainNav"), <Nav />);

var Home = {
    view: function() {
        return (
            <div>
                <h1>Home page</h1>
                <button onclick={function () {count++}}>Plus {count}</button>
            </div>
        )
    }
};

var Contact = {
    view: function() {
        return "Contact"
    }
};

// m.route.prefix("")
m.route(document.getElementById("mainContent"), "/home", {
    "/home": Home, // defines `http://localhost/#!/home`
    "/contact": Contact,
});
