import React, { FC, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { SFilters, SItem } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import { DEFAULT_CATEGORY, STATUS_OPTIONS } from "../../utils/constants";
import { fetchCategories } from "../../services/api/rest/methods";
import { Category, Option } from "../../services/api/rest/interfaces";

interface IFilters {
    setDaysCount: (param: string) => void;
    setStatus: (status: string) => void;
    setCategory: (category: number | string) => void;
    setOrder: () => void;
    order: string;
}

const EventsFilters: FC<IFilters> = ({
    setDaysCount,
    setStatus,
    setCategory,
    setOrder,
    order,
}) => {
    useEffect(() => {
        getCategories();
    }, []);

    const [startDate, setStartDate] = useState(new Date());
    const [categoriesOptions, setCategoriesOptions] = useState<Option[]>([
        DEFAULT_CATEGORY,
    ]);

    const getCategories = async () => {
        try {
            const res: any = await fetchCategories();
            console.log(res?.data.categories);
            setCategoriesOptions([
                ...categoriesOptions,
                ...res?.data.categories.map((el: Category) => {
                    return {
                        label: el.title,
                        value: el.id,
                    };
                }),
            ]);
        } catch (err) {
            console.log("err", err);
        }
    };

    const setDate = (date: Date) => {
        setStartDate(date);
        const daysCount =
            (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
        setDaysCount(Math.abs(daysCount).toFixed());
    };

    const getStatus = (status: any) => setStatus(status.value);

    const getCategory = (category: any) => setCategory(category.value);

    return (
        <SFilters>
            <SItem>
                <p>Order:</p>
                <div
                    className={`order ${order === "desc" ? "desc" : "asc"}`}
                    onClick={setOrder}
                >
                    <p>&#8593;</p>
                </div>
            </SItem>
            <SItem>
                <p>Prior date:</p>
                <DatePicker
                    maxDate={new Date()}
                    selected={startDate}
                    onChange={(date: any) => setDate(date)}
                />
            </SItem>
            <SItem>
                <p>Status:</p>
                <Select
                    className="custom-select"
                    classNamePrefix="select"
                    defaultValue={STATUS_OPTIONS[0]}
                    isSearchable
                    name="color"
                    options={STATUS_OPTIONS}
                    onChange={getStatus}
                />
            </SItem>
            <SItem>
                <p>Category:</p>
                <Select
                    className="custom-select"
                    classNamePrefix="select"
                    defaultValue={categoriesOptions[0]}
                    isSearchable
                    name="color"
                    options={categoriesOptions}
                    onChange={getCategory}
                />
            </SItem>
        </SFilters>
    );
};

export default EventsFilters;
