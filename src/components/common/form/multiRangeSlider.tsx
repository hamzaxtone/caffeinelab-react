import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef
} from "react";
import classnames from "classnames";

import styles from '../../../styles/components/MultiRangeSlider.module.scss';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const handleChange = (e: any) => {
    //setMinVal(777);
    //console.log(e.maxValue);
  };

  const handleChangeMin = (e: any) => {
    setMinVal(e.minValue);
    //console.log(e.maxValue);
  };
  const handleChangeMax = (e: any) => {
    setMaxVal(e.maxValue);
    //console.log(e.maxValue);
  };


  return (


    <div className={`${styles.MultiRangeSlider}`} >

      <div className={`flex  justify-between gap-x-6 mb-6  `}>
        <span className={`text-base rounded-xl flex items-center border-[1px] border-[#D5D5D5] px-[8px] pt-[12px] pb-[10px]`}><span className="mr-[5px]">SAR</span> 
          <input min="0" max={max} className="w-full outline-[0px]" onChange={e => { handleChangeMin(e) }} value={minVal} />
        </span>
        <span className={`text-base rounded-xl flex items-center border-[1px] border-[#D5D5D5] px-[8px] pt-[12px] pb-[10px]`}><span className="mr-[5px]">SAR</span> 
          <input min="0" max={max} className="w-full outline-[0px]" onChange={e => { handleChangeMax(e); }} value={maxVal} />
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames(`${styles.thumb} ${styles.thumb__zindex_3}`, {
          "{`${styles.thumb__zindex_5}`}": minVal > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`${styles.thumb} ${styles.thumb__zindex_4}`}

      />

      <div className={`${styles.slider}`}>
        <div className={`${styles.slider__track}`} ></div>
        <div ref={range} className={`${styles.slider__range}`} ></div>
        {/* <div className={`${styles.slider__left_value}`} >{minVal}</div>
          <div className={`${styles.slider__right_value}`} >{maxVal}</div> */}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
