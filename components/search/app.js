import React from 'react';
import PropTypes from 'prop-types';
import {
    RefinementList,
    SearchBox,
    Hits,
    Configure,
    Highlight,
    Pagination,
    InstantSearch,
} from 'react-instantsearch-dom';
import Link from 'next/link';

function HitComponent({ hit }) {
    return (
        <Link href={`/aaa`}>
            <div className="hit">
                <div>
                    <div className="hit-picture">
                        <img src={`${hit.image}`} />
                    </div>
                </div>
                <div className="hit-content">
                    <div>
                        <Highlight attribute="name" hit={hit} />
                        <span> - ${hit.price}</span>
                        <span> - {hit.rating} stars</span>
                    </div>
                    <div className="hit-type">
                        <Highlight attribute="type" hit={hit} />
                    </div>
                    <div className="hit-description">
                        <Highlight attribute="description" hit={hit} />
                    </div>
                </div>
            </div>
        </Link>
    );
}

HitComponent.propTypes = {
    hit: PropTypes.object,
};

export default class extends React.Component {
    static propTypes = {
        searchState: PropTypes.object,
        resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        onSearchStateChange: PropTypes.func,
        createURL: PropTypes.func,
        indexName: PropTypes.string,
        searchClient: PropTypes.object,
    };

    render() {
        return (
            <InstantSearch
                searchClient={this.props.searchClient}
                resultsState={this.props.resultsState}
                onSearchStateChange={this.props.onSearchStateChange}
                searchState={this.props.searchState}
                createURL={this.props.createURL}
                indexName={this.props.indexName}
                onSearchParameters={this.props.onSearchParameters}
                {...this.props}
            >
                <Configure hitsPerPage={12} />
                <header>
                    <SearchBox />
                </header>
                <main>
                    <div className="menu">
                        <RefinementList attribute="categories" />
                    </div>
                    <div className="results">
                        <Hits hitComponent={HitComponent} />
                    </div>
                </main>
                <footer>
                    <Pagination />
                </footer>
            </InstantSearch>
        );
    }
}
