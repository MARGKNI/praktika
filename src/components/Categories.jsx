import "./Categories.css";

const CategoriesGallery = () => {
  const categories = [
    { name: "ЛЮСТРЫ", image: "/images/lustry.jpg" },
    { name: "БРА", image: "/images/bra.jpg" },
    // ... остальные категории
  ];

  return (
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <div className="category-label">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesGallery;