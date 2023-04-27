const router = require('express').Router();
const conexion = require('./conection');

//GETs
router.get('/empleados/:dni',(req,res)=>{
    const {dni} = req.params
    let sql = 'SELECT * FROM empleado_contrasenia WHERE dni_empleado = ?';
    conexion.query(sql,[dni],(error,rows,fields)=>{
        if(error) throw error;
        else{
            res.json(rows);
        }
    });
});

router.get('/stock', (req,res)=>{
    let sql = `SELECT * FROM productos ORDER BY nombre_producto ASC`;
    conexion.query(sql,(error,rows,fields)=>{
        if(error) throw error;
        else{
            res.json(rows);
        }
    })
})

router.get('/pedidos-cliente', (req,res)=>{
    let sql = `SELECT * FROM pedidos_cliente`;
    conexion.query(sql,(error,rows,fields)=>{
        if(error) throw error;
        else{
            res.json(rows);
        }
    })
})

router.get('/productos-pedido', (req,res)=>{
    let sql = `SELECT * FROM productos_pedidos`;
    conexion.query(sql,(error,rows,fields)=>{
        if(error) throw error;
        else{
            res.json(rows);
        }
    })
})

//POSTs
router.post('/pedidos-cliente', (req, res)=>{
    const{fechRec, dni, nombre, tel, mail, total} = req.body;

    let sql = `INSERT INTO pedidos_cliente(fecha_recogida , estado, dni_cliente, nombre_cliente, telefono_cliente, email_cliente, total_pedido) 
                VALUES ('${fechRec}','SOLICITADO','${dni}', '${nombre}', '${tel}', '${mail}', '${total}')`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'pedido creado'});
        }
    })
})

router.post('/stock/addselectprod', (req, res)=>{
    const{nombre_producto, cant_seleccionada, total_producto, grupo_producto} = req.body;

    let sql = `INSERT INTO productos_pedidos(nombre_producto , id_pedido, cantidad_producto, importe_producto, grupo_producto) 
                VALUES ('${nombre_producto}',(SELECT id_pedido FROM pedidos ORDER BY id_pedido DESC LIMIT 1),'${cant_seleccionada}', '${total_producto}', '${grupo_producto}')`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'pedido creado'});
        }
    })
})

router.post('/stock/addproducto', (req, res)=>{
    const{nombre_producto, grupo_producto, cantidad_disponible, unidad_medida, es_personalizable, precio_orientativo} = req.body;

    let sql = `INSERT INTO productos (nombre_producto , cantidad_disponible, precio_orientativo, es_personalizable, grupo_producto, unidad_medida) 
                VALUES ('${nombre_producto}','${cantidad_disponible}', '${precio_orientativo}', '${es_personalizable}', '${grupo_producto}', '${unidad_medida}')`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'Producto creado'});
        }
    })
})

//PUTs
router.put('/stock/updateselectprod', (req, res)=>{
    const{nombre_producto, cant_seleccionada}=req.body;

    let sql = `UPDATE productos SET cantidad_disponible= cantidad_disponible - '${cant_seleccionada}' WHERE nombre_producto= '${nombre_producto}'`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'elemento modificado'});
        }
    })
})

router.put('/stock/updatestockprod', (req, res)=>{
    const{nombre_producto, cantidad_disponible, precio_orientativo, es_personalizable, grupo_producto, unidad_medida}=req.body;

    let sql = `UPDATE productos SET 
                nombre_producto='${nombre_producto}', 
                cantidad_disponible='${cantidad_disponible}',
                precio_orientativo='${precio_orientativo}',
                es_personalizable='${es_personalizable}',
                grupo_producto='${grupo_producto}',
                unidad_medida='${unidad_medida}'
                WHERE nombre_producto= '${nombre_producto}'`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'elemento modificado'});
        }
    })
})

router.put('/pedidos-cliente', (req, res)=>{
    const{id_pedido, estado}=req.body;

    let sql = `UPDATE pedidos_cliente SET estado= '${estado}' WHERE id_pedido = '${id_pedido}'`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'elemento modificado'});
        }
    })
})

//DELETEs
router.delete('/stock/deletestockprod/:nombre_producto', (req, res)=>{
    const{nombre_producto} = req.params;
    
    let sql = `DELETE FROM productos WHERE nombre_producto = ('${nombre_producto}')`;
    conexion.query(sql,(error, rows,fields)=>{
        if (error) throw error;
        else{
            res.json({status: 'producto eliminado'});
        }
    })
})

module.exports = router;