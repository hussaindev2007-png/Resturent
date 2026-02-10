
// const Checkbox = ({
//   id,
//   text,
//   className = "",
//   checkboxClassName = "",
//   labelClassName = "",
//   checked,
//   ...props
// }) => {
//   return (
   
// <div
//   className={`relative flex items-center gap-2 select-none ${className}`}
// >
  
//   <input
//     id={id}
//     type="checkbox"
//     checked={checked}
//     {...props}
//     className={`w-5 h-5 appearance-none rounded-md cursor-pointer
//       border -500/70 bg-gradient-to-br 
      
//       checked:shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]
//       hover:scale-110 hover:shadow-[0_0_10px_2px_rgba(56,189,248,0.3)]
//       transition-all duration-300 ease-out focus:ring-2 
//       ${checkboxClassName}`}
//   />

 
//   {text && (
//     <label
//       htmlFor={id}
//       className={`cursor-pointer text-white font-medium text-sm tracking-wide hover:text-sky-300 transition-colors duration-200 ${labelClassName}`}
//     >
//       {text}
//     </label>
//   )}
// </div>


//   );
// };

// export default Checkbox;



const Checkbox = ({
  id,
  text,
  className = "",
  checkboxClassName = "",
  labelClassName = "",
  checked,
  ...props
}) => {
  return (
    <div className={`relative flex items-center gap-2 select-none ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        {...props}
        // className={`
        //   w-5 h-5 appearance-none rounded-md cursor-pointer
        //   border border-neutral-700 bg-neutral-900/90 
        //   checked:bg-purple-950 checked:border-purple-800
        //   checked:shadow-[0_0_6px_1px_rgba(56,189,248,0.4)]
        //   hover:border-neutral-600 hover:shadow-[0_0_6px_1px_rgba(0,0,0,0.4)]
        //   transition-all duration-200 ease-out
        //   focus:ring-2 focus:ring-sky-600/40 focus:ring-offset-0
        //   ${checkboxClassName}
        // `}

        className={`
  w-5 h-5 appearance-none rounded-md cursor-pointer
  border border-neutral-700 bg-neutral-900/90 
  checked:bg-purple-500 checked:border-purple-400
  checked:shadow-[0_0_12px_3px_rgba(168,85,247,0.6)]
  hover:border-purple-400/70
  transition-all duration-300 ease-out
  focus:ring-2 focus:ring-purple-500/40 focus:ring-offset-0
  ${checkboxClassName}
`}

      />

      {text && (
        <label
          htmlFor={id}
          className={`
            cursor-pointer text-neutral-300 font-medium text-sm tracking-wide 
            hover:text-neutral-200 transition-colors duration-200
            ${labelClassName}
          `}
        >
          {text}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
