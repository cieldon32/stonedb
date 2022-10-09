import React, {useRef, useState} from 'react';
import {IStep} from './interface';
import {StepWrap, StepItemWrap, StepContext, ButtonWrap, ButtonIcon} from './styles';

export const Step: React.FC<IStep> = ({dataSource, value}) => {
  const [scroll, setScroll] = useState(0);

  const ref = useRef(null);

  const checkActive = (time: string) => {
    const res = time.replace(/[年|月]/g, '-').replace('日', '');
    return res === value;
  }

  const checkDisable = (time: string) => {
    const res = time.replace(/[年|月]/g, '-').replace('日', '');
    return new Date(res).getTime() > new Date(value as string).getTime();
  }

  const scrollPre = () => {
    setScroll((scroll) => scroll -= 300)
  }

  const scrollNext = () => {
    setScroll((scroll) => scroll += 300)
  }
 
  return (
    <StepWrap>
      <StepContext scroll={scroll} ref={ref}>
        <div className='wrap'>
        {
          dataSource.map(({title, desc, time}) => (
            <StepItemWrap active={checkActive(time)} disable={checkDisable(time)} key={time}>
              <dt>{title}</dt>
              <dd>
                <p>{desc}</p>
                <span>{time}</span>
              </dd>
            </StepItemWrap>
          ))
        }
        </div>
        {
          scroll > 0 ? (
            <ButtonWrap type="left" onClick={scrollPre}>
              <ButtonIcon name="BottomOutlined" />
            </ButtonWrap>
          ) : null
        }

        <ButtonWrap type="right" onClick={scrollNext}>
          <ButtonIcon name="BottomOutlined" />
        </ButtonWrap>
      </StepContext>
      {/* <div>{scroll} - {ref.current?.clientWidth!}</div> */}
    </StepWrap>
  )
}