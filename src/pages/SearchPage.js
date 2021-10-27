import React from 'react'
import useGoogleSearch from '../components/useGoogleSearch';
import Response from '../components/Response';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // 1- https://developers.google.com/custom-search/v1/using_rest
    // 2- https://cse.google.com/cse/create/new
    const { data } = useGoogleSearch(term);
    // const data = Response;
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searcPage__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons term={term} />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div class="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div class="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div class="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div class="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div class="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div class="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div class="searchPage__option">
                                <Link to="/setting">Setting</Link>
                            </div>
                            <div class="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {data && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} resualts ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={item.pagemap.cse_image[0]?.src} alt="" />
                                )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage
