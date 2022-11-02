/**
 * list: navi array object
 * callback
 * routerKey: switch keywords
 **/

const SlidingBlock = ({ routerKey, list, callback }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className={`type_s ${routerKey === item?.title ? "active" : ""}`}
            onClick={() => callback(item.title)}
          >
            <div>
              <img src={item.iconUrl} className="icon_top" alt="" />
            </div>
            <div className="div">
              <div className="type_s_title">{item.title} </div>
              <div>{item.des}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SlidingBlock;
