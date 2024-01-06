import ItemList from "./ItemList";

const CategoryRestaurant = ({ resdata, showItems, setShowIndex }) => {

  const showData = () => {
    setShowIndex();
  };

  //console.log(resdata);
  return (
    <div className="w-6/12 p-2 my-4 mx-auto bg-slate-200 rounded-lg shadow-lg">
      {/* Header  */}
      <div className="flex justify-between cursor-pointer" onClick={showData}>
        <span className="font-semibold">
          {resdata.title} ({resdata.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {/* Body  */}
      {showItems && <ItemList items={resdata.itemCards} />}
    </div>
  );
};

export default CategoryRestaurant;
