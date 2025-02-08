# Protocolo ΦCRISPR
El cáncer es una de las principales causas de mortandad a nivel mundial, caracterizado por el crecimiento descontrolado de células que pueden invadir tejidos circundantes y diseminarse a otras partes del cuerpo. La tecnología CRISPR-Cas9, desarrollada como una herramienta de edición genética de alta precisión, ha generado gran expectativa como una posible solución para combatir esta enfermedad.

### Marco Teórico
La herramienta CRISPR-Cas9, inicialmente descubierta como parte del sistema inmunitario adaptativo de bacterias y arqueas, ha sido adaptada para la edición genética en organismos superiores. Su mecanismo principal consiste en el uso de una proteína Cas9, guiada por un ARN dirigido (gRNA), para identificar y cortar secuencias específicas de ADN. Este sistema permite modificar genes con una precisión sin precedentes, lo que lo ha convertido en una revolución para la biología molecular y la medicina.
<br><br>
En el contexto del cáncer, esta tecnología ofrece nuevas perspectivas al abordar directamente las bases genéticas de la enfermedad. El cáncer se origina, en su mayoría, por mutaciones en genes críticos que regulan la proliferación celular, dividiéndose principalmente en dos categorías:

|*Oncogenes*|*Genes supresores de tumores*|
|-|-|
|Genes que, al activarse o sobreexpresarse, promueven el crecimiento descontrolado de células.|Genes que normalmente inhiben el crecimiento celular anormal y cuya inactivación permite la progresión del cáncer.|

CRISPR-Cas9 ofrece la posibilidad de intervenir directamente en estas mutaciones, bien sea corrigiéndolas, desactivándolas o eliminándolas. Además, puede ser utilizada para potenciar tratamientos existentes, como la inmunoterapia, al optimizar el sistema inmunitario para identificar y atacar las células tumorales. Esto abre la puerta a una medicina más personalizada y efectiva, capaz de adaptarse a las características genéticas únicas de cada paciente y tipo de cáncer.
<br><br>
No obstante, el uso de CRISPR-Cas9 también plantea retos significativos, como el riesgo de ediciones fuera del objetivo (off-target), la heterogeneidad de las células tumorales y las dificultades asociadas a la entrega segura y eficiente de esta tecnología al tejido afectado. Por ello, su implementación en el tratamiento del cáncer requiere no solo avances tecnológicos, sino también una comprensión profunda de los mecanismos moleculares que subyacen a esta enfermedad.

---

## Mecanismo de CRISPR-Cas9
CRISPR-Cas9 es una tecnología que permite editar secuencias específicas de ADN mediante **identificación de genes diana** (localiza mutaciones responsables del crecimiento descontrolado de las células cancerosas) y **edición precisa** (modifica, elimina o corrige mutaciones genéticas para frenar la proliferación de las células tumorales)
<br><br>
Entre sus aplicaciones destacadas se encuentran:
<br>
|*Desactivación de oncogenes*|*Reparación de genes supresores de tumores*|*Optimización del sistema inmunitario*|
|-|-|-|
|Genes que promueven el crecimiento tumoral.|Como *TP53* o *BRCA1*, que pierden funcionalidad en ciertos cánceres.|Programación de células CAR-T (células T con receptor de antígeno quimérico) para reconocer<br>y destruir células cancerosas.|

---

## Inyección localizada de CRISPR-Cas9 en el tratamiento del cáncer
- CRISPR permite identificar mutaciones específicas asociadas a cada tipo de cáncer y dirigir su acción hacia ellas.
- Los oncogenes **no** destruyen los genes BRCA1 ni TP53, sino que las "**desactivan**".
- Para que CRISPR pueda identificar y editar las cadenas de ADN afectadas por el tumor, es necesario diseñar y modificar los parámetros del mismo.
- El desarrollo de nuevas variantes (como Cas12 o Cas13) podría mejorar la especificidad y reducir los efectos fuera del objetivo.
- Es necesario acelerar los ensayos clínicos en humanos para validar la seguridad y eficacia de CRISPR en diferentes tipos de cáncer.
- CRISPR podría integrarse con otras terapias, como la inmunoterapia o la quimioterapia, para atacar diferentes aspectos del tumor simultáneamente.

---

## Limitaciones
Se están evaluando estrategias para mitigar las implicaciones de este protocolo, mencionadas a continuación:

- **Heterogeneidad del cáncer**<br>
El cáncer no es una enfermedad única, sino un conjunto de más de 200 patologías con causas genéticas y ambientales variadas. Además, un mismo tumor puede contener subpoblaciones celulares con mutaciones distintas, dificultando un tratamiento único.

- **Evolución del tumor**<br>
Las células cancerosas tienen una alta tasa de mutación y pueden desarrollar resistencia a los tratamientos, incluso después de una edición genética exitosa.

- **Efectos fuera del objetivo (Off-Target)**<br>
CRISPR-Cas9 podría alterar genes no deseados, generando mutaciones adicionales que podrían causar efectos adversos, incluidos nuevos cánceres.

- **Opciones de entrega**<br>
Asegurar que CRISPR alcance el tejido tumoral de manera efectiva es un desafío técnico. Se están explorando sistemas como nanopartículas, virus modificados (AAV) y Electroporación.

- **Acceso global y costos**<br>
El desarrollo y aplicación de terapias CRISPR requiere recursos significativos. Esto podría limitar su acceso en países con menor infraestructura médica y presupuesto.

---

## Modelo de predictibilidad probabilística

Para evaluar cuán preciso y eficiente es la aplicación del protocolo en un paciente, es necesario refinar el algoritmo analizando y relacionando los resultados de exámenes o investigaciones con CRISPR-Cas9 y modelos de expansión de las células cancerígenas. Se está diseñando y evaluando la mejor aproximación inicial y sus derivadas alternativas para cumplir con este requisito previo, usando modelos de redes neuronales entrenados con datos simulados.

### Probabilidad de éxito del Protocolo ΦCRISPR durante y previa a la etapa 3.
|Tasa de mutación|RBC|
|-|-|
|![image](https://github.com/user-attachments/assets/be4422cc-ed8b-43b4-8752-6349a9b5a17e)|![image](https://github.com/user-attachments/assets/22b57ccc-6358-451f-b1b2-8e0b8aff1a23)|

El **SDRP (Sistema de Detección y Reconocimiento de Patologías)** es un software diseñado para complementar el **Protocolo ΦCRISPR**, permitiendo evaluar la efectividad del tratamiento antes de su aplicación. Su función principal es analizar imágenes médicas, como radiografías y tomografías computarizadas (TAC), mediante algoritmos avanzados de **inteligencia artificial** y **redes neuronales convolucionales** especializadas en el reconocimiento de patrones patológicos.  

Este sistema emplea modelos de aprendizaje profundo entrenados con grandes volúmenes de datos clínicos, lo que le permite identificar, clasificar y cuantificar anomalías con alta precisión. Con base en este análisis, SDRP genera una estimación de la respuesta esperada al tratamiento basado en **ΦCRISPR**, proporcionando a los profesionales médicos información clave para la toma de decisiones.  

Además, el SDRP puede integrarse con bases de datos hospitalarias y plataformas de telemedicina para optimizar la evaluación remota de pacientes, reduciendo el tiempo de diagnóstico y mejorando la personalización de los tratamientos basados en edición genética.

---

## Conclusión
CRISPR-Cas9 representa una de las herramientas más prometedoras en la lucha contra el cáncer, con el potencial de transformar el tratamiento de ciertos tipos de tumores. Sin embargo, debido a la complejidad biológica del cáncer y los desafíos tecnológicos asociados, es poco probable que sea una cura universal en el corto plazo. Con suficiente inversión y desarrollo, podría convertirse en una herramienta clave para convertir ciertos cánceres en enfermedades tratables o incluso curables, marcando un avance significativo en la medicina personalizada.
