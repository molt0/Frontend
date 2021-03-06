import React from "react";
import styled from "styled-components";
import {
  InputRightElement,
  InputGroup,
  Input,
  Button,
  Box,
  Text,
  Link,
  Image,
  Center,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Alert,
  AlertTitle,
  AlertDescription,
  CloseButton,
  AlertIcon,
  Stack,
  Flex
} from "@chakra-ui/react";
import { TriangleUpIcon } from '@chakra-ui/icons';


const Login_btn = styled.div`
  .in_btn{
    transform: rotate(90deg);  
  }
`

const PsInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  const [loginError, setloginError] = React.useState('success')
  const [Errorlay, setErrorlay] = React.useState('none')

  const [inputs, setInputs] = React.useState({
    id: '',
    pw: ''
  });

  const { id, pw} = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value
    });
  };

  const entermain = (e) => {
    if(id == "itsw@itsw.com" && pw == "itsw"){
      location.href='/4';
    }else {
      setErrorlay('')
      setloginError('error')
    }
  };

  return(
    <>
      <Alert status={loginError} display={Errorlay} position="absolute" width="500px" float="right" r="0" t="0">
          <Flex>
            <AlertIcon />
            <AlertTitle mr={2}>아이디 또는 비밀번호가 유효하지 않습니다.</AlertTitle>  
          </Flex>  
          <AlertDescription ml={8}>ID or Password invalid.</AlertDescription>
      </Alert>
      <Box>
        <Center>
          <Image
          mt="70px"
          boxSize="300px"
          objectFit="cover"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREBUSEBIWDxASFRAVDxAVFRAREBAQFhYWFhUXExgYHSggGBolHRUTITEhJykrMC4uFx8zODMsNyg5LisBCgoKDg0OGxAQGzcmICUrLS0tLy0uLS0uLS0tLS0tLS0vLS0tLS0tMC03LS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBAIDBQj/xABFEAACAQICBwQGBwUFCQAAAAAAAQIDEQQhBQYSMVFhcUFykbEHEzKBodEUIiMzUsHwJZKy4fEWU3Oi0hUkNUJiY4KDwv/EABoBAQACAwEAAAAAAAAAAAAAAAACBAEDBQb/xAA9EQACAQIDBQUGAQoHAAAAAAAAAQIDERIhMQRBUWFxBRMygbEikaHB0fBSFBUjM0JDYnPC4TRygqLT4vH/2gAMAwEAAhEDEQA/AI+AD0R5IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGEZBkHY8LU/BL92fyH0Wf4Jfuz+RHHH8S95LDLg/cdYE4tZSTi+DTT8GDJEAAAAAAAAAAAAAAAAwcoQcnaKcn2JJt+CGmbHIwDaeiq9r+qduSu/BZmo+eT7U8mupCnVp1L4JJ24NP0Jzpzh44tdU16oyDlQoznLZpwlOXCKcn8Nxu1NB4mKu6ErckpPwV2YnXpU3hnNJ8G0n8WI05zV4xbXJN+hoAxyeTW9dqfM7KVKU3aEXN8Ipu3W242Sairt2XEgrt2RwBt1NF14q7pO3RSfgmahCnVp1FeEk+jT9Cc6c4eOLXVNAGA2bEiDMg2sNouvU9ijKSe57LSfRvI5V9EYiCvOjNLjsuSXVxuaPymhiw4434Yo39TZ3NXDiwu3R/Q0zv0f9/T78P4ka6Z34D76Hfh/EjbUVoS6P0Iw8UeqL7oYeDhFuEW2s3ZcDs+jQ/BHwQwv3a7sfI7TytGjT7uPsrRbkevlKSbzKg12wjq6SdKFk3FKN7pZOTtkdH9h8Z+Bf5v8ASehp2X7Yj1/1FqItUdprU6cKdN2SgnonrKf0Of8AklKrOc5q7xNavhHh1KZepGM/B5/I8CtScJODteLs7bj6Eqbn0ZQGlcq9TvMvbHtNapWcJu6wt6Jb0t3Up7fslGjSUoKzvbVvc/oayMmDZw2j61TOnSlJcVF7Pi8jpTnGCxTaS4tpepy4RlN2irvln6GuDeraGxMFeVGVuS2v4bmgRp1adRXpyT6NP0MzhODtNNdU16mQATIgAAGacHJqK3tpLqW9qhqvToUlKpFTqSSeavbquPkVvqnTjLFU1O2ymm77rZX+FyfYfWWpLSLot/ZNfV3W35W91mcLtOvet3TzjFYmsuPifFRytzb4Hd7LpRjT73e3hX0XXf0JjKlFqzSa4NKxDta9TqdZxnS+zltRUtldjdv1w6EzQk7FZxd8UXhktGtV8n0aaOhJKawzV09zPM0LoKjhqajCKv2vfd8eb5npSgmrNJrg9xEIa5qWO+jRheF2tr/qSvb+ZMUiFNR/Da6Tz1aejzzd+efJBST8L0yy0TW7/wAIbrhqnCslUpLYqJxTaV3Zu2fFeR7Wg9X6OGpqKgnLtbzz9/bzPXZBq+u7WNVGMU6e1st9v9TDjZYc3FXko7o21lb5bv2VdhKEZYslJ2V97vovXrvJtUpRkrSSkuDSa8CA68apx2XXoK1vaj+uzy6FgxOGKpqUJRe6SafgbXeLxwyktH8nxT0a3iUYzjgnnF/d+q3Hz1CLk1GKbk2kkt7ZZ2qWpMIRVXELbm7NLsXT57+h5WpehIzx9aUleFKTtw2nm/NL3lnosbVtX5T7McoWV+bavZ8kmst710KGxbGqV5zzldpcrNq/VnCjQjHKMVHokcqlKMt6T6pHGtiIwV5PZXMUMVCorwkpdOzqVP0V+7y6Zeh0fa1InrTqZSrxc6K9XWSbul7Xe4+fkVfRoyp14wmtmUakFJcPrL4H0CVr6RNFqGIo14q21OMZfvXXk/EtbNWdF93+xJNJfhdsrcnpbRO1rXOftuyxmu8is01fmvqteZYuE+7j3V5HadGBf2UO6vI7ytR/Vx6L0OhPVkCx2mqNPGSoToetqSqNxm20km8ll0ZO47ipNYZftj/z/Nlto10aUadrftRTfXFJfIj3jm5X3Sa8rRfzMVN3uZXFXWzCU5uDwi2ouz2ZN58syyKm59GVLq7otV9J1L5xpzcvl8EyVSnTm26maUW0lbN4opLNPe0suO8jOpUioqnrKVs76Wbe9cCQaH1UhWqvE1ovZm04U2l9VJJbs12b/wCpNqGFhBWhFR92fidkI2VlkluXI41a0Yq8nZGIU4winN3wq13uS3LgunmbN7w5Xd+r+/7HKdNPek+quRjWXVGjiYuUVsVVukt/TmuT+BIcPjKdT2JKRsE0oTtUg890lqvNfFacbmJRusMldcHofPmOwkqNR06mUo799muxrkdBYnpQ0Wko10s72l+f5fErpHd2LaHXp3l4k7Phfj5qz5aHm9r2fuauFaPNdP7O6MgAtFUKTWabT4rJnvakNvG07tvfm229y4ngkg1EX++0+kvJFTtD/C1X/Cy1sX+Jpr+JF0nXifYl3ZeR2I6sV7Eu7LyZxKvgl0Z6WOqKZ0RL9pp/9yp5TLrRSeiP+Ir/ABJ//RdiNtb9ZH+VT/qKex+Cf+eXyOGI9mXdl5FGYbPHrvsvPE+xLuy8mUZhJKOPjfdt+bMR/e/yp/IztTt3X8yJeqMT3CnK6TW52a6MyyO4taEU1HS9ZiuPrXf92BLSN6H0RUoYutUTXqauy7dqklZ+UfAkSZX2RWhZ/Fclf3O652Myd37/AFZXnpUjV2YbN3R/50s1y2uV/wAjW9FMau3Pf6iy47O3nfZ+BZVWjGStJJrmYo4eMMopRXI34pqk6NlbFivv1T4Wvla9/DlbeV3s6dfvrvS1t3v4cra7ztIh6Rreop/4lK3Xbj/Ml1ysvSTpdSrUqMXdU2py5WeX5+AcHUnGEdW0/KPtP0t1aW8lWmoU3KXT35FjaPf2MO5DyRsGpoiqpUKbW5wj8MvyNsjRf6OPRG+fiZUWm1+2P/Z8y3EQrSeq1SppGOIX3d7yzW/t59rJojEJXtyil5pyfzXvNai4uT4ybXS0V8hPc+jIFqEl9NxfHb+Fv6k9aIrojV+dDHVsQ5JUppZZb0n+vEjVyafJfCUX5ZJu7yyMtNtW4/0tfQlZCvSdGq8OvV7Wxf7S2+3b7t3uJpTkmrrNPczjWpKStJJrg8za7u0o52aeejs7mJRxRcdLq2XMqX0aKr9J+pdUr/W/B7udrluI6sPg4U/Yio9N5sEpSlUqSqSSTlbJclbXK7fGyIUaSpU1TTvb703ET9I7X0N37WreD/kU/En/AKTtLKUo4eLvs5ztx7fyXiQBHR7MTwTnucsvJJP43XkcntWSdWMeCz83cyADpHMMHv6jzSxkG8klK79yPBMNGraKXfUpU72xJq+tr8sjbRqd1UjUtezuX69MUP7xf5vkdOK0zh3CSVVXakkvrb7dCh9lcF8DOyuRzZdl1ZJrvVn/AAP/AJDqLtZL93/u/wCp7ejJWx6b3Kcm3y+sW5/aHC/30fCfyKJscdlcF8DdW7PlOalGdvZUfDfS+fiXHT4mih2j3UWnC95OXitrbLwvgXxU05hnFpVU7p2ylw6FI6UusRUtk1N2fBpmrso5WJ7LsUqNRzlPFla2G29P8T4ENr27v4KGG1nfW+5rguJbOpWtEK1NU6jUasFZriuK5eRLvWRte6txurHzwnZ3Ts1uayafJm9/trE7Oz6+du87+O/4lWXZlSLtRaw7lK6tyur3XDhzLNPtRYf0sXfirZ++33wLQ1x1pp4em4QanVmmlFeb4Ln4Hn6qa7wnGNLEPYqKyUtyl0+XhcrJtttt3b3t5t9WcWjYuyoYbyl7f4louWF6x43zbzvw1PtSpjul7PD534/dj6FpYiEvZkn71fwFSvGO+SXvRQmG0jWp5U6soLgpPZXRPIziNKV6itOtOS7VtNJ9UsmafzdtGmKNuPtemnliLH51pW8L+Hr/AGLL1p12p0U6dB+sq5rL2Y959nTf03lV16sqknOb2pSd5N9rOKRk6Gy7JGhd3vJ6t+iWiXrvZztp2qdd55Lh97/uxYOoetMYJUK7sl7Euf6/WZYtPEQkrxlFrimmj55sbUNJV4qyqtLrf4sp1ezpKTdFqz3O+XRq+XJrLdlkr1HtRKNqqbfFb+t3rz3+tuazaz0sNTezJSqNNRSzz5cX5dpqam60U69JQqPYqRWab7Or3rn4lSzk5O8m5N7222372Yi2ndOzW5rJp8mh+avZxOft8beylww625639xF9qyx5R9nhv63+WnvPob1sbXurcbqxEtc9aoUKbp02pVpKyXBcXy8ys3pnE2t6+du87+O/4mk227t3b3t5tvmRh2bUk7VpLDvUb5+btZcbJ35b5Ve1I4bUou/F2y91/viWFqlrulFUsU7NZKo8r97sT5f0J/h8dSqK8Jp8rpPweZ8+2O6hi6kMoTcFwTaXhuJ1OzGneg0l+F6Lo1mlys+VkRo9qWVqqvzWvmtH1uvM+gK2JhBXnOMVzaRD9Z9d6dKLhQe1Ud1tfh6L838Ssq2kK8vaqN+K8jVSMQ7NnL9bJJcI3z/1PTyV+aJ1O1Y2tTjnxl9Fr5s7cRXlUk5yd5PecEYsZOrGKilGKslkjjyk5Nt6sAAyYAAAMWMgAGBYyAAYMgAAAAAAAAAAwZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
          alt="Segun Adebayo"
          />
        </Center>
        <Box ml="100px">
          <Text fontSize="25px" fontWeight="bold" mt="10px">로그인</Text>
          <Text fontSize="15px">MOLTO</Text>
        </Box>
        <Center>
          <Text fontSize="13px">04:09</Text>
          <Slider my="6"mx="10px" width="230px" colorScheme="teal" defaultValue={30}>
            <SliderTrack  height="1px">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text fontSize="13px">-03:24</Text>
        </Center>
        <Box>
          <Input  name="id" onChange={onChange} value={id} width="300px" height="40px" left="100px"placeholder="아이디" />
        </Box>
        <InputGroup width="300px" height="40px" left="100px">
          <Input
            name="pw" onChange={onChange} value={pw}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="비밀번호"
            height="40px"
            mt="5px"
          />
          <InputRightElement width="4.5rem">
            <Button h="35px" mt="10px" size="sm" onClick={handleClick}>
              {show ? "숨기기" : "보기"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <Stack>
            <Center>
              <Login_btn >
                  <Icon as={TriangleUpIcon} onClick={entermain} className="in_btn" mt="50px" width="50px" height="50px" color="teal.300"/>
              </Login_btn>
            </Center>
            <Flex >
              <Text mt="15px">아직 계정이 없으신가요?</Text>
              <Link href="../signup" fontSize="sm" fontWeight="bold" mt="16px" ml="10px" fontdecoration="line" display="block">
                <Text as="u" >회원가입</Text>
              </Link>
            </Flex>   
          </Stack>
        </Center>
      </Box>
    </>
  );
}


export default PsInput;
