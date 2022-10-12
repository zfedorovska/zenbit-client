import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from '../../redux/feedbacks/feedbacks-selectors';
import * as operations from '../../redux/feedbacks/feedbacks-operations';

import {
  MainContainer,
  FeedbackFormBlock,
  Title,
  Input,
  Textarea,
  Button,
  Footer,
} from './Feedback.style';
import icons from '../../images/icons.svg';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.addFeedback({ name, email, message }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      {
        <div>
          <MainContainer>
            {/* <Cartoon left="2.01%" top="6.55%" width="88px" height="86px">
          <svg>
            <use href={icons + '#icon-cartoon1'}></use>
          </svg>
        </Cartoon>
        <Cartoon left="763px" top="516px" width="127px" height="127px">
          <svg>
            <use href={icons + '#icon-cartoon2'}></use>
          </svg>
        </Cartoon> */}
            <FeedbackFormBlock>
              <Title>Reach out to us!</Title>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Your name*"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your e-mail*"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  title="should be valid email"
                  required
                />
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Your message*"
                  value={message}
                  onChange={handleChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="should be valid email"
                  required
                />
                <Button type="submit" disabled={loading}>
                  Send message
                </Button>
              </form>
            </FeedbackFormBlock>
            {/* <Cartoon left="63.9%" top="49.47%" width="214px" height="208px">
          <svg>
            <use href={icons + '#icon-cartoon3'}></use>
          </svg>
        </Cartoon> */}
          </MainContainer>
          <Footer>
            <ul>
              <li>
                <a href="">
                  <svg width="12.87" height="12.95">
                    <use href={icons + '#icon-linkedin'}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="16.09" height="12.87">
                    <use href={icons + '#icon-twitter'}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg width="8.36" height="16.09">
                    <use href={icons + '#icon-facebook'}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    width="12.23"
                    height="14.8
"
                  >
                    <use href={icons + '#icon-pinterest'}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </Footer>
        </div>
      }
    </div>
  );
}
