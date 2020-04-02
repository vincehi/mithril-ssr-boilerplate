import m from 'mithril';

const RouteLink = m.route.Link as any;

export default class Header implements m.ClassComponent {
  view(): m.Children {
    return (
      <header>
        <div>The Header</div>
        <nav>
          <RouteLink href="/contact">Contact</RouteLink>
          <RouteLink href="/">Home</RouteLink>
        </nav>
      </header>
    );
  }
}
