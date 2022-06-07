

import React, { useCallback, useEffect, useState } from "react";
import { ApiException } from "../../shared/services/api/ErrorException";
import { ITarefa, TaskService } from "../../shared/services/api/tarefas/TarefasService";
import { Body, Botao, Favoritos, Item, Section, Titulo } from "./styledLogin";



export const Login = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TaskService.getAll()
        .then((result) => {
            if (result instanceof ApiException ) {
                alert(result.message);
            } else {
                setLista(result);
            }
        })
    },[lista])
    
    const handleInputKeyDown : React.KeyboardEventHandler<HTMLInputElement> = useCallback((e)=> {
        if (e.key === 'Enter' ) {
           if (e.currentTarget.value.trim().length === 0) return;
       
           const value = e.currentTarget.value;

           e.currentTarget.value = '';

           if (lista.some((listItem) => listItem.title === value)) return;

            TaskService.create({ title:value, isCompleted: false})
            .then((result) => {
                if (result instanceof ApiException ) {
                    alert(result.message);
                } else {
                    setLista((oldLista) => [...oldLista])
                 }
            }
        )}
    },[lista]);

    const handleToggleComplete = useCallback((id:number) => {
        const taskUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!taskUpdate) return;

        TaskService.updateById(id,{
            ...taskUpdate,
            isCompleted: !taskUpdate.isCompleted
        })
            .then((result) => {
                if (result instanceof ApiException ) {
                alert(result.message);
             }  else {
                setLista(oldLista => {
                    return oldLista.map(oldListItem => {                                             
                        return oldListItem ;                   
                    });
                });
                }
            })
     },[lista]);

     const handleDelete = useCallback((id:number) => {
        
        TaskService.deleteById(id)
        .then((result) => {
                if (result instanceof ApiException ) {
                alert(result.message);
             }  else {
                setLista(oldLista => {
                    return oldLista.filter(oldListItem => oldListItem.id !== id )
                });
                }
            })
     },[lista]);

    
     
    
    
    return(
        <Body>
            <Section>
                <Titulo> List </Titulo>
                <input type="text" placeholder="Add an item"
                onKeyDown={handleInputKeyDown}/>

                <Favoritos> {lista.filter((listItem)=> listItem.isCompleted).length} favorites  </Favoritos>

                <ul>
                    {lista.map((IListItem) =>  {
                        return <Item key={IListItem.id}> {IListItem.title}
                        <input type="checkbox"
                         checked={IListItem.isCompleted} 
                            onChange={() => handleToggleComplete(IListItem.id)}

                         /> 
                         <Botao value="Apagar" onClick={() => handleDelete(IListItem.id)}> Delete </Botao>
                         </Item>
                    })}
                </ul>
            </Section>
        </Body>
    );
}