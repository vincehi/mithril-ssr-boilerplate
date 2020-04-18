import m from 'mithril';

const RouteLink = m.route.Link as any;

interface Attrs {
  test: string;
};

export default class Header implements m.ClassComponent<Attrs> {
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
