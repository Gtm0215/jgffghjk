import {
paintings,
customPaintings,
bookmarks,
postcards,
customBulbDeco,
customWallCd,
oceanVinyl,
xmasPostcard,
animalCanvas,
giftHamper
} from "../assets"

export default function App() {
return ( <div>

```
  <h2>Categories</h2>

  <div className="category-grid">

    <div className="card">
      <img src={paintings} />
      <p>Paintings</p>
    </div>

    <div className="card">
      <img src={customPaintings} />
      <p>Custom Paintings</p>
    </div>

    <div className="card">
      <img src={bookmarks} />
      <p>Bookmarks</p>
    </div>

    <div className="card">
      <img src={postcards} />
      <p>Postcards</p>
    </div>

  </div>

  <h2>Featured Products</h2>

  <div className="products">

    <div className="product">
      <img src={customBulbDeco}/>
      <h3>Custom Bulb Deco</h3>
      <p>₹299</p>
    </div>

    <div className="product">
      <img src={customWallCd}/>
      <h3>Custom Wall CD Hanging</h3>
      <p>₹299</p>
    </div>

    <div className="product">
      <img src={oceanVinyl}/>
      <h3>Ocean on Vinyl</h3>
      <p>₹499</p>
    </div>

    <div className="product">
      <img src={xmasPostcard}/>
      <h3>Custom Xmas Postcard</h3>
      <p>₹150</p>
    </div>

    <div className="product">
      <img src={animalCanvas}/>
      <h3>Animal Canvas</h3>
      <p>₹599</p>
    </div>

    <div className="product">
      <img src={giftHamper}/>
      <h3>Mystery Craft Hamper</h3>
      <p>₹1299</p>
    </div>

  </div>

</div>
```

)
}
