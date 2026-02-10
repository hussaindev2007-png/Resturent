

// import Checkbox from "./Checkbox";

// function CategoryFilter({ category, selectedCategories, onChangeCategory }) {
  
//  return (
//     <div className="w-full max-w-xs  shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
//       <h3 className="font-semibold text-lg border-b  pb-2">
//         Category Filter
//       </h3>

//       <div className="space-y-2 pt-1">
//         {category.map((category) => (
//           <Checkbox
//             key={category.id}
//             text={category.category}
//             checked={selectedCategories.includes(category.category)}
//             onChange={(e) => onChangeCategory(category.category, e.target.checked)}
//             className=" hover: p-1 rounded-md transition"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryFilter;




import Checkbox from "./Checkbox";

function CategoryFilter({ category, selectedCategories, onChangeCategory }) {
  return (
    <div
      className="
        w-full max-w-xs 
        bg-black/95
        border border-neutral-900
        rounded-2xl
        p-5 space-y-3 
        shadow-[0_0_15px_3px_rgba(0,0,0,0.7)]
        hover:shadow-[0_0_18px_4px_rgba(0,0,0,0.8)]
        transition-all duration-500
      "
    >
      <h3 className="font-semibold text-lg text-neutral-300 border-b border-neutral-800 pb-2 tracking-wide">
        Category Filter
      </h3>

      <div className="space-y-2 pt-1">
        {category.map((category) => (
          <Checkbox
            key={category.id}
            text={category.category}
            checked={selectedCategories.includes(category.category)}
            onChange={(e) => onChangeCategory(category.category, e.target.checked)}
            className="
              p-1 rounded-md 
              hover:bg-neutral-950/80 
              transition-colors duration-200
            "
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
