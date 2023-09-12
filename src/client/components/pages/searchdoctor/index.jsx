import React from 'react';
import Select from 'react-select';
import SearchFilter from './searchFilter';
import SearchList from './searchList';
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

const SearchDoctor =()=> {
	

		return (
			<div>
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-8 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"> <Link to="/home">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Search</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">2245 matches found for : Optometry In Bangalore</h2>
							</div>
							<div className="col-md-4 col-12 d-md-block d-none">
							<div className="sort-by">
								<span className="sort-title">Sort by</span>
								<span className="sortby-fliter">
									<select className="form-select">
										<option>Select</option>
										<option className="sorting">Rating</option>
										<option className="sorting">Popular</option>
										<option className="sorting">Latest</option>
										<option className="sorting">Free</option>
									</select>
								</span>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="container-fluid">

						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3">
								<StickyBox offsetTop={20} offsetBottom={20}>
									<SearchFilter />
								</StickyBox>
							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">
								<SearchList />
								<div className="load-more text-center">
									<a href="#0" className="btn btn-primary btn-sm">Load More</a>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		);
	}

export default SearchDoctor;