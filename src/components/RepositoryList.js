import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './repo.css';
import ErrorBoundary from './ErrorBoundary';
import { Link } from "react-router-dom"

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/IgeIbukun7/repos?per_page=6&page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Oops! An unexpected error occured. Failed to fetch repositories');
        }
        const linkHeader = response.headers.get('link');
        const totalPagesMatch = linkHeader && linkHeader.match(/&page=(\d+)>; rel="last"/);
        const totalPages = totalPagesMatch ? parseInt(totalPagesMatch[1], 10) : 1;
        const data = await response.json();
        setRepositories(data);
        setTotalPages(totalPages);
      } catch (error) {
        setError(error);
      }
    };

    fetchRepositories();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <ErrorBoundary><p className='d-flex flex-row align-items-center justify-content-center error'>{error.message}</p></ErrorBoundary>;
  }


  return (
    <>
      <div id='repolist'>
        <h1>My GitHub Repositories:</h1>
        <div className='d-flex flex-wrap justify-content-between repocontainer'>
          {filteredRepositories.map((repo) => (
            <div className="repocard" key={repo.id}>
              <span className='d-flex flex-row align-items-start justify-content-between repo1'>
              <Link to={`/repo/${repo.name}`}><h2 className="reponame">{repo.name}</h2></Link>
                <p className="visibility">{repo.visibility}</p>
              </span>
              <span className='d-flex flex-row align-items-center justify-content-start repo2'>
                <span className='d-flex flex-row repo3'><span className='dot'></span>
                <p className="language">{repo.language === null ? "none" : repo.language}</p></span>
                <p className="date">{repo.updated_at}</p>
              </span>
            </div>
          ))}
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center page'>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={handleSearch}
          className='search'
        />
      </div>
    </>
  );
};

export default RepositoryList;