import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecipeFinder = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const filterRecipe = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => setData(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  // Filter the data based on the 'text' state
  const filteredData = data.filter((item) =>
    item.strCategory.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <input
            type="text"
            placeholder="Search Recipe..."
            className="form-control my-5 fs-5"
            value={text}
            onChange={filterRecipe}
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
        {filteredData.map((item) => {
          return (
            <div className="card border-0 shadow" key={item.idCategory}>
              <img src={item.strCategoryThumb} alt={item.strCategory} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.strCategory}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeFinder;
