const SearchResultArrays = new Mongo.Collection(null);
SearchResultArrays.insert({ query: '', businesses: [] });
export default SearchResultArrays;
