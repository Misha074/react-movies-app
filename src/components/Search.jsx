import React from "react";

class Search extends React.Component {
    state = {
        search: 'matrix',
        type: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleClick = () => {
        this.props.searchMovies(this.state.search, this.state.type)
    }

    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.value}),
            () => {this.props.searchMovies(this.state.search, this.state.type)}
        )
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field">
                        <input
                            placeholder="Введите название фильма"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey} />
                        <button className="btn search-btn" onClick={this.handleClick}>Поиск</button>
                        
                        <label className="type-radio-label" htmlFor="all">Все категории
                            <input 
                                className="type-radio-input" 
                                type="radio" 
                                id="all" 
                                name="type"
                                value=""
                                onChange={this.handleFilter}
                                checked = {this.state.type === "" ? true : false}
                                />
                        </label>
                        <label className="type-radio-label" htmlFor="movie">Фильмы
                            <input 
                                className="type-radio-input" 
                                type="radio" 
                                id="movie" 
                                name="type"
                                value="movie"
                                onChange={this.handleFilter}
                                checked = {this.state.type === "movie" ? true : false}
                                />                            
                        </label>
                        <label className="type-radio-label" htmlFor="series">Сериалы
                            <input 
                                className="type-radio-input" 
                                type="radio" 
                                id="series" 
                                name="type"
                                value="series"
                                onChange={this.handleFilter}
                                checked = {this.state.type === "series" ? true : false}
                                />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    }
}

export { Search }