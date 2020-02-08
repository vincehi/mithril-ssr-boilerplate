import m from '../common/m';

export default {
  view: () => {
    return (
      <header>
        <div>The Header</div>
        <nav>
          <m.route.Link href="/contact">Contact</m.route.Link>
          <m.route.Link href="/">Home</m.route.Link>
        </nav>
      </header>
    );
  }
};
