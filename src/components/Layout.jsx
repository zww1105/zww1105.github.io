import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="p-4 max-w-screen-xl bg-background m-auto min-h-screen ring-1 ring-zinc-100 tracking-wide">
      <div className="max-w-screen-md m-auto py-20">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
