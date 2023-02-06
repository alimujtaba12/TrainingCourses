import React, { useEffect, useState } from "react";
import axiosRequest from "../Api/Axios";
import axios from "axios";
import styled from "styled-components";
import { ArrowUpRight, ChevronDown } from "../Assets/Icons";
import { Selection, Svg } from "./index";
import { LoadingBlock } from '../Loading-block/LoadingBlock'
import { dateFormatter, cleanText } from '../Utils/Utils'


const Container = styled.div`
    width: 100%;
    padding: 2.5rem;
    overflow-x:auto;
    box-sizing: border-box;
`;

const Heading = styled.h1`
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;
    color: var(--primary);
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    max-height: 500px;
    border-radius: 8px;
    padding: 40px;
    box-sizing: border-box;
    overflow-x: auto;
`;

const Link = styled.a`
    display:flex;
    justify-content: space-between;
    width: 80px;
    text-decoration: none;
    font-size: 14px;
`;

const Button = styled.a`
    margin-top: 40px;
    color: var(--primary-dark);
    display: flex;
    justify-content: space-between;
    width: 88px;
    cursor: pointer;
`;

const TableContainer = styled.div`
    width: 100%;
    height: 300px;
    overflow-y: auto;
`;

const DataTable = () => {
    const API_ENDPOINT = "https://frontend-trial-api.qa.parallax.dev/api/courses";
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [filteredParam, setFilteredParam] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        setLoading(true);
        axiosRequest(API_ENDPOINT, 'GET').then((res) => {
            setData(res);
            setCurrentPage(res?.courses?.current_page);
            setLastPage(res?.courses?.last_page)
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            alert(err)
        })
    }, [])

    useEffect(() => {
        if (filteredParam?.categories.length && filteredParam?.locations.length) {
            setLoading(true);
            axios.post(API_ENDPOINT, filteredParam)
                .then(function (res) {
                    setData(res?.data);
                    setCurrentPage(res?.data?.courses?.current_page);
                    setLastPage(res?.data?.courses?.last_page)
                    setLoading(false);
                })
                .catch(function (error) {
                    setLoading(false);
                    alert(error);
                });
        }
    }, [filteredParam])

    const handleClick = () => {
        if (currentPage <= lastPage) {
            if (filteredParam?.categories.length && filteredParam?.locations.length) {
                setLoading(true);
                axios.post(`${API_ENDPOINT}?page=${currentPage + 1}`, filteredParam)
                    .then(function (res) {
                        setData(prevState => ({
                            courses: {
                                ...prevState,
                                data: [...prevState?.courses?.data, ...res?.data?.courses?.data]
                            }
                        }));
                        setCurrentPage(currentPage + 1);
                        setLoading(false);
                    })
                    .catch(function (error) {
                        setLoading(false);
                        alert(error);
                    });
            } else {
                setLoading(true);
                axiosRequest(`${API_ENDPOINT}?page=${currentPage + 1}`, 'GET').then((res) => {
                    setData(prevState => ({
                        courses: {
                            ...prevState,
                            data: [...prevState.courses.data, ...res?.courses?.data]
                        }
                    }));
                    setCurrentPage(currentPage + 1);
                    setLoading(false);
                }).catch(err => {
                    setLoading(false);
                    alert(err.error)
                })
            }
        }
    }

    return (
        <Container>
            <Heading>Training Courses</Heading>
            <Selection filteredParam={filteredParam} setFilteredParam={setFilteredParam}></Selection>
            <Main>
                {loading ? (
                    <>
                        <table className="loading-table">
                            <thead>
                                <tr>
                                    <th><LoadingBlock height="24px" width="80px"></LoadingBlock></th>
                                    <th><LoadingBlock height="24px" width="60px"></LoadingBlock></th>
                                    <th><LoadingBlock height="24px" width="80px"></LoadingBlock></th>
                                    <th><LoadingBlock height="24px" width="100px"></LoadingBlock></th>
                                    <th><LoadingBlock height="24px" width="100px"></LoadingBlock></th>
                                    <th><LoadingBlock height="24px" width="100px"></LoadingBlock></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <tr key={`${index}-item`}>
                                        <td><LoadingBlock height="24px" width="350px"></LoadingBlock></td>
                                        <td><LoadingBlock height="24px" width="100px"></LoadingBlock></td>
                                        <td><LoadingBlock height="24px" width="100px"></LoadingBlock></td>
                                        <td><LoadingBlock height="24px" width="100px"></LoadingBlock></td>
                                        <td><LoadingBlock height="24px" width="250px"></LoadingBlock></td>
                                        <td><LoadingBlock height="24px" width="120px"></LoadingBlock></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <LoadingBlock height="23px" width="120px" margin="40px 0 0 0"></LoadingBlock>
                    </>
                ) : (
                    <>
                        <TableContainer>
                            {data && data.courses.data.length === 0 ?
                                (<p>There's no data available</p>)
                                : (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Course</th>
                                                <th>ID</th>
                                                <th>Price</th>
                                                <th>Location</th>
                                                <th>Dates</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.courses.data.map((course) => (
                                                <tr key={`${course.course_id}-${Math.random() * 100}`}>
                                                    <td className="bold">{cleanText(course?.name)}</td>
                                                    <td>{course.course_id}</td>
                                                    <td>{course.price}</td>
                                                    <td>{course.location}</td>
                                                    <td> {dateFormatter(course.starts_at)} - {dateFormatter(course.ends_at)}</td>
                                                    <td>
                                                        <Link href={course.link}>
                                                            Register <Svg src={ArrowUpRight} />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>)}
                        </TableContainer>
                        {currentPage < lastPage && <Button onClick={() => { handleClick() }}>Load more <Svg src={ChevronDown} /></Button>}
                    </>
                )}
            </Main>
        </Container>
    )
};

export default DataTable;
