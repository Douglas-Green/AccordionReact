import PropTypes from "prop-types";
import {useState} from "react";

// The Accordion component expects "data" to be passed as a prop
export default function Accordion({data}) {
  const [selected, setSelected] = useState([]);

  // Function to handle the selection and deselection of items
  const toggleSelection = id => {
    setSelected(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Main container with Tailwind CSS classes for styling */}
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* Check if data exists and has items */}
        {data && data.length > 0 ? (
          // Map through the data array to create each accordion item
          data.map(dataItem => (
            <div
              key={dataItem.id}
              className="border-b last:border-b-0"
            >
              {/* The clickable title area with Tailwind CSS classes */}
              <div
                onClick={() => toggleSelection(dataItem.id)}
                className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-4 md:p-6 font-semibold flex justify-between items-center"
              >
                {dataItem.title} {/* Display the title of the data item */}
                <span>{selected.includes(dataItem.id) ? "-" : "+"}</span>{" "}
                {/* Toggle icon based on selection */}
              </div>
              {/* Conditionally render the content if the item is selected */}
              {selected.includes(dataItem.id) && (
                <div className="p-4 md:p-6 bg-gray-50">
                  {dataItem.content}{" "}
                  {/* Display the content of the data item */}
                </div>
              )}
            </div>
          ))
        ) : (
          // Display a message if no data is available
          <div className="p-4 text-center text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
}

// PropTypes to ensure the data prop is an array of objects with specific keys
Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Each item must have an id of type number
      title: PropTypes.string.isRequired, // Each item must have a title of type string
      content: PropTypes.string.isRequired, // Each item must have content of type string
    })
  ).isRequired, // The data prop is required
};
