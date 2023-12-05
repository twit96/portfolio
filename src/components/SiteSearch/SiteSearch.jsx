import Fuse from "fuse.js";
import { useState } from "react";
import styles from "./SiteSearch.module.css";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ["data.title", "data.blurb", "data.description", "data.datePublished", "data.dateUpdated", "slug"],
	minMatchCharLength: 2,
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true,
};

function Search({ searchList }) {
	const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const results = fuse
    .search(query)
    .slice(0, 8);  // limit to 8 results

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>

      <div className={styles.heading+" wrapper"}>
        <div>
          <h1>Search</h1>
          <p>
            Having trouble finding something? Try your luck here!
          </p>
        </div>
        <div className={styles.bar+" card"+(results && results.length>0 ? " surface4" : " surface2" )}>
          <svg
            height="1.5em"
            viewBox="0 0 512 512"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
          <input 
            type="text" 
            value={query} 
            onChange={handleOnSearch} 
            placeholder="Search posts" 
            className="card surface0"
            size="1"
          />
        </div>
        {query.length > 0 && (
          <p>
            Found {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {
        query.length > 0 && results && results.length > 0 && (
          <div className="card shadow-sm surface0 wrapper">
            <ul className={styles.results}>
              {
                results.map((result, i) => (
                  <li key={i} className={styles.result+" card surface1"}>

                    <div className={styles.resultScore}>
                      <b className="surface3">
                        {Math.round((1-result.score)*100)}% Match
                      </b>
                    </div>

                    <h2 className={`heading--reduced ${styles.resultTitle}`}>
                      <a href={`/${result.item.slug}/`}>
                        {result.item.data.title}
                      </a>
                    </h2>

                    <div className={styles.resultInfo}>
                      <em className="blurb">
                        {result.item.data.blurb}
                      </em>
                      <p>
                        <em>
                          {result.item.data.datePublished}
                        </em>
                        {
                          result.item.data.dateUpdated && (
                            <em>
                              (Updated {result.item.data.dateUpdated})
                            </em>
                          )
                        }
                      </p>
                    </div>

                    <p className={styles.resultDescription}>
                      {result.item.data.description}
                    </p>
                   
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

    </>
  );
}
export default Search;