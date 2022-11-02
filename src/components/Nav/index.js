/**
 * list: navi array object
 * callback
 * routerKey: switch keywords
 **/

const Nav = ({ routerKey, navList = [], callback }) => {
  return (
    <>
      {navList.map((item, index) => {
        return (
          <div
            key={index}
            className={`nav_btn ${routerKey === item?.title ? "active" : ""}`}
            onClick={() => callback(item?.title)}
          >
            {item?.title}
          </div>
        );
      })}
    </>
  );
};
export default Nav;
