import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import CustomLink from '../CustomLink';

export default function SideBarComponent({ items}) {
    const toast = useRef();

    return (
        <div>
            <Toast ref={toast} />
            <div className="flex flex-column mt-3 gap-2">
         
            {
                    items.map((item, key) => {
                     
                            return (
                                <div key={key}>
                                    <CustomLink href={item.url}>
                                        <div className="flex flex-row gap-2 link font-bold cursor-pointer menu-item select-none border-left-3">
                                            <i className={item.icon}></i>
                                            {item.label}
                                        </div>
                                    </CustomLink>
                                </div>
                            );
                        
                    })}
                              
            </div>
        </div>
    );
}
