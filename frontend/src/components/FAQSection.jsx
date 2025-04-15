import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
  const faqs = [
    {
      question: 'What are your opening hours?',
      answer: 'We are open from Tuesday to Sunday from 10:00 AM to 8:00 PM. We\'re closed on Mondays.',
    },
    {
      question: 'Do you offer vegetarian or vegan options?',
      answer: 'Yes! We offer a variety of vegetarian dishes, and some can be customized to be vegan. Just let our staff know!',
    },
    {
      question: 'Can I place an order for pickup?',
      answer: 'Absolutely. You can place pickup orders directly on our website.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, El Amigo is located in a separate area with its own dedicated parking lot. There’s plenty of space available for our guests right next to the restaurant.',
    },
    {
      question: 'Are pets allowed?',
      answer: 'Pets are welcome in our outdoor patio area, but not inside the indoor dining space (service animals are always allowed).',
    },
  ];
  
  const FAQSection = () => {
    return (
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: 8,
          backgroundColor: '#111',
          color: '#fff',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Frequently Asked Questions
        </Typography>
  
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: '#1c1c1c',
              color: '#fff',
              mb: 2,
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
              <Typography fontWeight="medium">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="#ccc">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  };
  
  export default FAQSection;
  