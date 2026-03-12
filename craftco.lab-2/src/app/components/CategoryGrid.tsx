import paintingsImage from "../../assets/69f555be4e627c818b6c203a89cf347cbec4a343.png";
import customPaintingsImage from "../../assets/df041053efbb57c70472acd0af3f4aebcd976cfa.png";
import bookmarksImage from "../../assets/3c69aa21d9eca9167e2ce832f939d03132b55f1a.png";
import postcardsImage from "../../assets/7e9f3fc442f4e433080d2bd71b724a01f633049b.png";

const categories = [
{ id: 1, title: "Paintings", image: paintingsImage },
{ id: 2, title: "Custom Paintings", image: customPaintingsImage },
{ id: 3, title: "Bookmarks", image: bookmarksImage },
{ id: 4, title: "Postcards", image: postcardsImage },
];

export function CategoryGrid() {
return ( <section className="max-w-7xl mx-auto px-6 py-16">
<h2
className="text-4xl text-center mb-12"
style={{ fontFamily: "'Playfair Display', serif" }}
>
Explore Our Collections </h2>

```
  <div className="grid grid-cols-4 gap-6">
    {categories.map((category) => (
      <div
        key={category.id}
        className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
      >
        <div className="aspect-[3/4] relative">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#D85C63]/0 group-hover:bg-[#D85C63]/40 transition-all duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3
              className="text-white text-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category.title}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
```

);
}
