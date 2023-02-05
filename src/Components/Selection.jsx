import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axiosRequest from "../Api/Axios";

const Wrapper = styled.div`
    margin-bottom: 28px;
`;

const Flex = styled.div`
    display:flex;
    gap: 16px;
`;

const Select = styled.select`
    width: 164px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 2px solid var(--primary);
    cursor: pointer;
    padding: 18px 0;
    font-weight: 700;
    -webkit-appearance: none;
    -moz-appearance: none;

    ::-ms-expand {
        display: none;
    }
`;

const Chip = styled.div`
    margin: 24px 0 40px;
    padding: 4px 12px;
    height: 32px;
    background: var(--indigo);
    border-radius: 105px;
    color: var(--white);
    line-height: 32px;
    text-align: center;
`;

const Selection = ({ filteredParam, setFilteredParam }) => {
    const CATEGORIES_API_ENDPOINT = "https://frontend-trial-api.qa.parallax.dev/api/categories";
    const LOCATIONS_API_ENDPOINT = "https://frontend-trial-api.qa.parallax.dev/api/locations";

    const [categories, setCategories] = useState([]);
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCatergory, setSelectedCatergory] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);


    useEffect(() => {
        setLoading(true);
        axiosRequest(CATEGORIES_API_ENDPOINT, 'GET').then((res) => {
            setCategories(res);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            alert(err)
        })
    }, [])

    useEffect(() => {
        setLoading(true);
        axiosRequest(LOCATIONS_API_ENDPOINT, 'GET').then((res) => {
            setLocation(res);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            alert(err)
        })
    }, [])


    useEffect(() => {
        if (selectedCatergory && selectedLocation) {
            setFilteredParam(prevState => ({
                ...prevState,
                "categories": selectedCatergory,
                "locations": selectedLocation
            }))
        }
    }, [selectedLocation, selectedCatergory, setFilteredParam])

    const handleCateogriesChange = (e) => {
        if (selectedCatergory.indexOf(e.target.value) === -1) {
            setSelectedCatergory(prevState => [...prevState, e.target.value]);
        }
    }

    const handleLocationsChange = (e) => {
        if (selectedLocation.indexOf(e.target.value) === -1) {
            setSelectedLocation(prevState => [...prevState, e.target.value]);
        }
    }


    return (
        <Wrapper>
            <Flex>
                {!loading && categories &&
                    <Select defaultValue={'DEFAULT'} onChange={(e) => { handleCateogriesChange(e) }}>
                        <option value="DEFAULT" disabled>Category</option>
                        {
                            categories?.courses?.data.map((category, index) => (
                                <option value={category?.name} key={`${index}-category`}>{category?.name}</option>
                            ))
                        }
                    </Select>
                }
                {!loading && location &&
                    <Select defaultValue={'DEFAULT'} disabled={selectedCatergory.length < 1 ? true : false} onChange={(e) => { handleLocationsChange(e) }}>
                        <option value="DEFAULT" disabled>Location</option>
                        {
                            location?.courses?.data.map((location, index) => (
                                <option value={location?.name} key={`${index}-category`}>{location?.name}</option>
                            ))
                        }
                    </Select>
                }
            </Flex>
            <Flex>
                <Flex>
                    {selectedCatergory?.map((item, index) => (
                        <Chip key={`${index}-category`}>{item}</Chip>
                    ))}
                </Flex>
                <Flex>
                    {selectedLocation?.map((item, index) => (
                        <Chip key={`${index}-category`}>{item}</Chip>
                    ))}
                </Flex>
            </Flex>
        </ Wrapper>
    )
};

export default Selection;