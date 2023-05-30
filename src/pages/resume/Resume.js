import emailjs from 'emailjs-com';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Resume.module.css';

export const Resume = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const name = useFormInput('');
  const message = useFormInput('');
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  const serviceId = 'service_72jodxf';
  const templateId = 'template_0tbohxi';
  const public_key = 'SUp9B1ldd-hlAlpcd';

  const onSubmit = async event => {
    event.preventDefault();

    sendEmail();
  };

  const sendEmail = async () => {
    //Create a template params object
    const templateParams = {
      to_name: 'Daniel Ayala',
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    };

    console.log(templateParams);

    try {
      //Send Email via EmailJS
      setSending(true);
      await emailjs.send(serviceId, templateId, templateParams, public_key);
      setSending(false);
      setComplete(true);
    } catch (error) {
      setSending(false);
      setStatusError(error);
      console.log(error);
    }
  };
  return (
    <Section className={styles.resume}>
      <Section className={styles.resumeContent}>
        <Section className={styles.resumeContentLeft}></Section>
      </Section>
    </Section>
  );
};
