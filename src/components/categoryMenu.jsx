import React from "react";

function CategoryMenu(showMenu) {

    const options = ["Fantasy", "Sci-Fi", "Mystery", "Thriller", "Romance", "Horror", "Historical", "Children"];

    return (
        <div className={`overflow-hidden transition-[max-height] duration-600 ease-in-out ${showMenu ? "max-h-20" : "max-h-0"}`}>
            
        <div className="bg-gray-200 flex justify-center gap-25 py-2 border-none">

            {options.map((op, i) => (
                <span key={i} className="text-black cursor-pointer hover:underline">
                {op}
                </span>
            ))}
        </div>
    </div>
    );
}

export default CategoryMenu