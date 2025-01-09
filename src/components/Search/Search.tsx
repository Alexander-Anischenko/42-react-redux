/* eslint-disable react-hooks/exhaustive-deps */
import type { ChangeEvent } from "react"
import { useEffect, useState } from "react"

import Input from "../Input/Input"
import { SearchContainer } from "./styles"
import axios from "axios"
import type { UserDate } from "./types"

function Search() {
  const [search, setSearch] = useState<string>("")

  const DATA = `https://randomuser.me/api/?results=10&name=${search}`
  const [objects, setObjects] = useState<UserDate[]>([])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filterDataArray = (usersArray: any) => {
    return usersArray.map((user: any) => ({
      name: user.name,
      email: user.email,
      photoUrl: user.picture.medium,
      country: user.location.country,
    }))
  }

  const fetchDate = async () => {
    try {
      const response = await axios.get(DATA)
      //console.log(response)
      setObjects(filterDataArray(response.data.results))
      console.log(objects);
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDate()
  }, [search])

  return (
    <SearchContainer>
      <Input
        name="userSearch"
        placeholder="search"
        id="user"
        label="User search"
        onChange={handleInputChange}
        value={search}
      />
    </SearchContainer>
  )
}

export default Search
