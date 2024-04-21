import React from 'react';
import { FaRegStar, FaRegEye, FaCodeBranch } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/repo.css';


const Repo = () => {

    const { id } = useParams()
    const [details, setDetails] = useState({})
    const [branch, setBranch] = useState({})
    const [deployment, setDeployment] = useState({})

    useEffect(() => {
        fetch(`https://api.github.com/repos/IgeIbukun7/${id}`)
        .then((response) => (response.json()))
        .then((data) => {
          setDetails(data)
        })
      }, [id]) 
    
      useEffect(() => {
        fetch(`https://api.github.com/repos/IgeIbukun7/${id}/branches`)
        .then((response) => (response.json()))
        .then((data) => {
          setBranch(data)
        })
      }, [id]) 
    
      useEffect(() => {
        fetch(`https://api.github.com/repos/IgeIbukun7/${id}/deployments`)
        .then((response) => (response.json()))
        .then((data) => {
          setDeployment(data)
        })
      }, [id]) 
    
      return (
        <div id="singlerepo" className='d-flex flex-row align-items-center justify-content-center'>
            <div className="singlerepocard">
                <h2 className="reponame">{details.name}</h2>
                <div className="d-flex flex-sm-row align-items-sm-center justify-content-sm-between repodetails">
                  <p><FaRegStar className="icons" /> Stars: {details.stargazers_count}</p>
                  <p><FaRegEye className="icons" /> Watch: {details.watchers}</p>
                  <p><TbGitFork className="icons" /> Forks: {details.forks}</p>
                  <p><FaCodeBranch className="icons" /> Branches: {branch.length}</p>
                </div>
                <p>Main Language: {details.language === null ? "none": details.language}</p>
                <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://IgeIbukun7.github.io/${details.name}`}>IgeIbukun7.github.io/{details.name}</a>}</p>
                <p><a href={`https://github.com/${details.full_name}`}>View on Github</a></p>
            </div>
        </div>
      )
    };

export default Repo;