import { useEffect, useState } from "react"
import axios from 'axios'

import DoctorCardList from "../../components/DoctorCards/DoctorCardList"
import { departmentMappings } from "../../data/departments"

const baseURL = 'https://pokeapi.co/api/v2/'

export default function Home() {
    const [doctorcards, setDoctorCards] = useState([])
    const [departments, setDepartments] = useState(["water"])
    const [doctors, setDoctors] = useState()

    const getDepartmentName = (typeName) => {
        return departmentMappings[typeName] || "Primary Care";
    }

  //#region DATA FETCHING -------

    // Button for fetching data
    useEffect(() => {
        async function fetchData(){
        axios.get(`${baseURL}type`).then((res) => {
            // console.log(res.data.results)
            setDepartments(res.data.results)
        })
        }
        fetchData();
    }, [])  
    //   console.log(departments)

    // Click handler for fetching data
    const handleClick = async (department) => {
        axios.get(`${baseURL}type/${department}`).then((res) => {
        // console.log(res.data.pokemon)
        setDoctors(res.data.pokemon)
        })
    }

    //   Fetching doctors for each department
    useEffect(() => {
        async function fetchDoctorDetails() {
            if (doctors && doctors.length > 0) {
                const updatedDoctorCards = await Promise.all(
                    doctors.map(async (doctor) => {
                        const response = await axios.get(doctor.pokemon.url)
                        // console.log(response.data)
                        return response.data 
                    })
                )
                setDoctorCards([...updatedDoctorCards])
            }
        }
        fetchDoctorDetails()
    }, [doctors])

    // console.log(doctorcards)

  //#endregion

 //#region JSX RETURN -------
  return (
    <div className="Home page">

      {departments.map((item, index) => {
          return <button className="department-btn" key={index} onClick={() => {
              handleClick(item.name)
            }}>{getDepartmentName(item.name)}</button>
        })}

      <DoctorCardList doctorcards={doctorcards} />

    </div>
  )
  //#endregion
}


// const SAMPLE_DOCTORSCARDS = [
//     {
//       id: 1,
//       name: "Pidgey",
//       title: "keen-eye",
//       departments: ["normal", "flying"],
//       more: "View Profile"
//     },
//     {
//         id: 2,
//         name: "Spearow",
//         title: "sniper",
//         departments: ["normal", "flying"],
//         more: "View Profile"
//     },
//   ];