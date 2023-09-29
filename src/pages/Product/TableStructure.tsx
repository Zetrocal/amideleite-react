import styled from "styled-components";

interface TTable{
    [key:string]: string
}
interface TProps{
    tableInfo: TTable
}
export default function TableStructure({tableInfo}:TProps) {
    let tableKeys = Object.keys(tableInfo)
    return(
        <TableStructureApp>
            {tableKeys.map((key:string, index:number)=> (
                <Row key={"tableInfo-"+index}>
                    <Column1>{key}</Column1>
                    <th>:</th>
                    <Column2>{tableInfo[key]}</Column2>
                </Row>
            ))}
            
        </TableStructureApp>
    );
}


const TableStructureApp = styled.table`
    width: 100%;
    max-width: 800px;
`

const Row = styled.tr`
    border-bottom: 1px solid #0e0d0d;
    
`

const Column1 = styled.th`
    text-align: left;
    border-bottom: 1px solid #0e0d0d;
    padding: 10px;
    min-width: 200px;
    @media (max-width: 640px){
        min-width: 0px;
    }

    @media (max-width: 400px){
        padding: 10px 5px;
        
    }

    @media(max-width: 200px){
        font-size: 10px;
        padding: 10px 0px;
    }
`

const Column2 = styled.th`
    text-align: left;
    border-bottom: 1px solid #0e0d0d;
    @media(max-width: 200px){
        font-size: 10px;
    }
    
`