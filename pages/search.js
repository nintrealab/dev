import isEqual from 'react-fast-compare';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import qs from 'qs';
import algoliasearch from 'algoliasearch/lite';
import { findResultsState } from 'react-instantsearch-dom/server';
import { Head, App } from '../components/search';

const searchClient = algoliasearch(
    '1ROWVE2KRF',
    '2df268da01be93809abdb68e2d096901'
);

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
    path.includes('?') ? qs.parse(path.substring(path.indexOf('?') + 1)) : {};

const searchStateToURL = (searchState) =>
    searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : '';

const DEFAULT_PROPS = {
    searchClient,
    indexName: 'instant_search',
};

class Page extends React.Component {
    static propTypes = {
        router: PropTypes.object.isRequired,
        resultsState: PropTypes.object,
        searchState: PropTypes.object,
    };

    state = {
        searchState: this.props.searchState,
        lastRouter: this.props.router,
    };

    static async getInitialProps({ asPath }) {
        const searchState = pathToSearchState(asPath);
        const resultsState = await findResultsState(App, {
            ...DEFAULT_PROPS,
            searchState,
        });

        return {
            resultsState,
            searchState,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!isEqual(state.lastRouter, props.router)) {
            return {
                searchState: pathToSearchState(props.router.asPath),
                lastRouter: props.router,
            };
        }

        return null;
    }

    onSearchStateChange = (searchState) => {
        clearTimeout(this.debouncedSetState);

        this.debouncedSetState = setTimeout(() => {
            const href = searchStateToURL(searchState);

            this.props.router.push(href, href, {
                shallow: true,
            });
        }, updateAfter);

        this.setState({ searchState });
    };

    render() {
        return (
            <div>
                <Head title="Home" />
                <App
                    {...DEFAULT_PROPS}
                    searchState={this.state.searchState}
                    resultsState={this.props.resultsState}
                    onSearchStateChange={this.onSearchStateChange}
                    createURL={createURL}
                />
            </div>
        );
    }
}

export default withRouter(Page);
