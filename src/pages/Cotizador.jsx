
export const Cotizador = () => {
  return (
    <>
    <h3 className="center">Cotizador</h3>

    <div className="imagen-contacto1"></div> 
    <h2 className="marginLeft-20">Cotiza tu compra</h2>
      <div>
          <div className="contenedor-cotizador flex">
              <div className="cotizador-artesania">
                  <form className="contacto">
                      <fieldset className="field-cotizador">
                          <legend>Elige tu artesania</legend>

                              <div className="orden">
                                  <label>Seleccione la Artesania deseada:</label> <br/>
                                  <select id="artesania" name="artesania">
                                      <option value=" ">-Seleccione una Artesania-</option>
                                      <option value="1">Caja decorada</option>
                                      <option value="2">Guaje pintado</option>
                                  </select>
                              </div>

                              <div className="orden">
                                  <label>Seleccione el tamaño deseado:</label> <br/>
                                  <select id="tamano" name="tamano">
                                      <option value=" ">-Seleccione un tamaño-</option>
                                      <option value="1">Chico</option>
                                      <option value="2">Mediano</option>
                                      <option value="3">Grande</option>
                                  </select>
                              </div>
                      </fieldset>  
                      <input type="submit" id="calcular" className="da-link4" value="Calcular"/>
                  </form>  
              </div>    
              
              <div className="cotizador-precio">
                  <fieldset className="field-cotizador">
                      <legend>Cotizacion</legend>
                      <div className="total">
                      <label>Resumen:</label> <br/>

                          <div id="lista-productos">
                          </div>
      <br/>
                          <label>Total:</label>

                          <div id="suma-total">
                          </div>

                      </div>
                  </fieldset>  
                  <input type="hidden" name="total_pedido" id="total_pedido" value="total_pedido" />
                  <input type="submit" className="da-link4" id="btnRegistro" name="submit" value="Pagar" />
              </div>  
          </div>
      </div>    
    </>

  )
}

