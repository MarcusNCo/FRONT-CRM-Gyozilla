import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, List, ListItem, ListItemText } from '@mui/material'
import './Recruiting.css'

const RecruitingPage = () => {
  return (
    <div className="recruiting-page">
      <Typography variant="h4">Join Our Team!</Typography>
      <Typography variant="body1">
        Nous sommes toujours à la recherche de personnes talentueuses pour
        rejoindre notre équipe et aider
      </Typography>
      <Typography variant="h6">Postes ouverts</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Front-end Developer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Back-end Developer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Full-stack Developer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="UI/UX Designer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Product Manager" />
        </ListItem>
      </List>
      <Typography variant="h6">Exigences</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Experience with React" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Strong understanding of web technologies (HTML, CSS, JavaScript)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ability to work in a fast-paced environment" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Excellent communication skills" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bachelor's degree in Computer Science or a related field" />
        </ListItem>
      </List>
      <Typography variant="h6">Avantages</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Competitive salary" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Flexible work schedule" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Healthcare coverage" />
        </ListItem>
        <ListItem>
          <ListItemText primary="401(k) plan with company match" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Paid time off and holidays" />
        </ListItem>
      </List>
      <Typography variant="body1">
        Prêt à nous rejoindre? Envoyez votre CV et lettre de motivation à{' '}
        <a href="mailto:jobs@example.com">jobs@example.com</a>.
      </Typography>
      <Typography variant="body1">
        Vous ne voyez pas un poste qui correspond à vos compétences?{' '}
        <Link to="/contact">Contactez-nous</Link> et dites-nous comment vous
        pouvez contribuer!
      </Typography>
    </div>
  )
}

export default RecruitingPage
