import { useEffect, useState } from "react";
import { useFetchWrapper } from "../../hooks/useFetchWrapper";
import { Container, Row, Form, Col } from "react-bootstrap";

import "./Principal.css";

import MeeteamWhiteIcon from "../../assets/img/MeeteamWhiteIcon.png";
import MeetTeamIcon from "../../assets/img/MeetTeamIcon.png";

import { COUNTRY_ALL } from "../../constants/ConstantsEndPoints";
import { ICountry } from "../../interfaces/Utils.interfaces";

export const Principal = () => {
    const fetchWrapper = useFetchWrapper();
    const [validated, setValidated] = useState(false);
    const [lstCountry, setLstCountry] = useState<ICountry[]>();
    const [country, setCountry] = useState("");

    useEffect(() => {
        fetchWrapper.get(COUNTRY_ALL, null).then(({ data }) => {
            setLstCountry(data);
        });
    }, []);

    const setCountryObject = (ev: any) => {
        setCountry(ev.target.value);
    }

    const onSubmitHandler = (ev: any) => {
        const form = ev.currentTarget;
        if (form.checkValidity() === false) {
            ev.preventDefault();
            ev.stopPropagation();
        } else {
            ev.preventDefault();
        }
        setValidated(true);
    }

    return (
        <>
            <Container fluid className="principal">
                <Form noValidate
                    validated={validated}
                    onSubmit={(ev:any) => {
                        onSubmitHandler(ev);
                    }} 
                    className="form-personal-info">
                    <Form.Group className="mb-2">
                        <Row>
                            <Col lg={6}>
                                <Form.Label className="basic-input-label">Country</Form.Label>
                                <Form.Select required={true}
                                    size="sm"
                                    value={country}
                                    onChange={ev => setCountryObject(ev)}>
                                    <option value="">Select</option>
                                        {
                                            lstCountry && lstCountry.length ?
                                                lstCountry.map(
                                                    (country: any) => <option id={country.name} key={country.iso} value={country.iso} >{country.name}</option>
                                                ) 
                                            :
                                                <></>
                                        }
                                    </Form.Select>
                            </Col>
                            <Col lg={6}>
                                <Row className="bckg-principal">
                                    <img className="img-principal" src={MeeteamWhiteIcon} alt="Logo" />
                                </Row>
                                <Row>
                                    <img className="img-principal" src={MeetTeamIcon} alt="Logo" />
                                </Row>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
};